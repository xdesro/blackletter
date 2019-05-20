<template>
  <div class="hercules"></div>
</template>

<script>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PointLight,
  AmbientLight,
  MeshLambertMaterial
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { GLTFLoader } from "three-gltf-loader";

// import { TweenLite, Power2 } from "gsap/all";
import TweenLite from "gsap/umd/TweenLite";
import { Power2 } from "gsap/umd/EasePack";

export default {
  data() {
    return {
      model: {
        geometry: {
          url: ""
        },
        material: {
          color: 0x222222
        }
      },
      lights: [
        {
          name: "key",
          color: 0xffffff,
          intensity: 10,
          distance: 100,
          position: [0, 20, 20]
        },
        {
          name: "fill",
          color: 0xffffff,
          intensity: 1,
          distance: 100,
          position: [-30, 0, 20]
        },
        {
          name: "fill",
          color: 0xffffff,
          intensity: 1,
          distance: 100,
          position: [10, 0, 20]
        },
        {
          name: "back",
          color: 0xffffff,
          intensity: 10,
          distance: 100,
          position: [10, 30, -50]
        }
      ],
      initialRotation: { y: 0 },
      scene: new Scene(),
      renderer: new WebGLRenderer({ alpha: true }),
      camera: new PerspectiveCamera(75, this.aspectRatio, 0.1, 1000),
      bust: undefined
    };
  },
  computed: {
    pageRotation() {
      return this.$store.state.statueRotation.y;
    },
    aspectRatio() {
      return window.innerWidth / window.innerHeight;
    },
    totalRotation() {
      return { y: this.pageRotation + this.initialRotation.y };
    }
  },
  watch: {
    pageRotation() {
      //   console.log("updated");
      //   this.handleRoute;
    }
  },
  asyncData() {
    return {};
  },
  mounted() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.$el.appendChild(this.renderer.domElement);
    this.camera.position.set(-20, 15, 30);
    this.scene.add(this.camera);

    this.lights.forEach(light => {
      const sceneLight = new PointLight(
        light.color,
        light.intensity,
        light.distance
      );
      sceneLight.position.set(...light.position);
      this.scene.add(sceneLight);
    });
    const ambientLight = new AmbientLight(0xffffff, 2);
    this.scene.add(ambientLight);
    this.loadGLTF(this.model.geometry.url).then(gltf => {
      this.bust = gltf.scene.children[0];
      this.bust.traverse(
        object =>
          (object.material = new MeshLambertMaterial(this.model.material))
      );
      this.scene.add(this.bust);
      this.animate();
    });

    document.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("resize", this.handleResize);
  },
  methods: {
    loadGLTF(url) {
      return new Promise(resolve => {
        new GLTFLoader().load(url, resolve);
      });
    },
    animate() {
      this.bust.traverse(
        object =>
          (object.rotation.y = this.pageRotation + this.initialRotation.y)
      );
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },
    handleMouseMove(e) {
      const percentX = e.pageX / window.innerWidth / 3;
      TweenLite.to(this.initialRotation, 1, {
        y: percentX,
        ease: Power2.easeOut
      });
    },
    handleResize() {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      //   cancelAnimationFrame(this.animate);
      //   this.renderer.render(this.scene, this.camera);
      //   requestAnimationFrame(this.animate);
    }
  }
};
</script>

<style>
.hercules {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
canvas {
  mix-blend-mode: overlay;
}
</style>

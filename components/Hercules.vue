<template>
  <div class="hercules">
    <transition name="hercules">
      <div v-if="loaded" ref="container" class="hercules__inner"></div>
    </transition>
  </div>
</template>

<script>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  PointLight,
  MeshLambertMaterial
} from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import TweenLite from "gsap/umd/TweenLite";
import { Power2 } from "gsap/umd/EasePack";

export default {
  data() {
    return {
      loaded: false,
      model: {
        geometry: {
          url: require("~/assets/models/hercules.gltf")
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
      statueRotation: { y: this.$store.state.statueRotation.y },
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
    aspectRatio() {
      this.camera.aspect = this.aspectRatio;
      this.camera.updateProjectionMatrix();
    },
    pageRotation() {
      this.handleRoute();
    }
  },
  mounted() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.position.y = 15;
    this.camera.position.z = 30;
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

    const ambientLight = new AmbientLight(0xffffff, 0.2);
    this.scene.add(ambientLight);

    this.loadGLTF(this.model.geometry.url).then(gltf => {
      this.bust = gltf.scene.children[0];
      this.bust.traverse(
        object =>
          (object.material = new MeshLambertMaterial(this.model.material))
      );
      this.scene.add(this.bust);
      this.loaded = true;
      this.animate();
      this.$nextTick(() => {
        this.camera.aspect = this.aspectRatio;
        this.camera.updateProjectionMatrix();
        this.$refs.container.appendChild(this.renderer.domElement);
      });
    });
    document.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animate);
  },
  methods: {
    loadGLTF(url) {
      return new Promise(resolve => {
        new GLTFLoader().load(url, resolve);
      });
    },
    animate() {
      this.bust.traverse(object => {
        object.rotation.y = this.statueRotation.y;
      });
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },
    handleMouseMove(e) {
      const percentX = (e.pageX - window.innerWidth / 2) / window.innerWidth;
      const newTweenTo = this.pageRotation + percentX / 10;
      TweenLite.to(this.statueRotation, 2, {
        y: newTweenTo,
        ease: Power2.easeOut
      });
    },
    handleResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
    handleRoute() {
      TweenLite.to(this.statueRotation, 1, {
        y: this.pageRotation,
        ease: Power2.easeInOut
      });
    }
  }
};
</script>

<style>
.hercules {
  position: fixed;
  top: 0;
  left: 45vw;
  z-index: -2;
  opacity: 0.3;
  background: #efefef;
}
.hercules-enter-active,
.hercules-leave-active {
  transition: all 2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hercules-enter,
.hercules-leave-to {
  opacity: 0;
  transform: translateX(40vw);
}
.hercules-leave,
.hercules-enter-to {
  opacity: 1;
  transform: translateX(0);
}
</style>

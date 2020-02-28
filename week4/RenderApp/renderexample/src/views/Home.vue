<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  render(createElement) {
    return createElement(
      "div",
      {
        attrs: {
          class: "home"
        },
        on: {
          click: () => alert("test")
        }
      },
      [
        createElement(HelloWorld, {
          props: {
            tag: "h1"
          }
        })
      ]
    );
  }
};
</script>

import ExerciseSix from "./ExerciseSix.vue";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "ExerciseSix",
  component: ExerciseSix,
  argsTypes: {
    color: { control: "color" },
    size: { control: { type: "range", min: 1, max: 20, step: 1 } },
    translateX: { control: { type: "range", min: 1, max: 30, step: 1 } },
    translateY: { control: { type: "range", min: 1, max: 30, step: 1 } },
    scaleX: { control: { type: "range", min: 1, max: 30, step: 1 } },
    scaleY: { control: { type: "range", min: 1, max: 30, step: 1 } },
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    controls: { expanded: true },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ExerciseSix },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: `
    <ExerciseSix 
      key='icon' 
      :color='color' 
      :size='size' 
      :position='position' 
      :translateX='translateX' 
      :translateY='translateY'
      :scaleX='scaleX' 
      :scaleY='scaleY'
    />
  `,
});

export const Desktop = Template.bind({});

Desktop.args = {
  size: 32,
  color: "white",
  translateX: 0,
  translateY: 0,
  scaleX: 1,
  scaleY: 1,
};

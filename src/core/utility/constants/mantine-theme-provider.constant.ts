import {
  ActionIcon,
  Anchor,
  Badge,
  Button,
  Card,
  Checkbox,
  createTheme,
  Divider,
  Modal,
  Popover,
  Select,
  Stepper,
  Table,
  Text,
  TextInput,
  Tooltip,
  type CSSVariablesResolver,
  type DefaultMantineColor,
  type MantineColorsTuple,
} from "@mantine/core";

// TO IMPORT CUSTOM COLORS

type ExtendedCustomColors = "primary" | "gray" | DefaultMantineColor;
declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

export const BrandName = "IAM";
export const theme = createTheme({
  /** Your theme override here */
  fontFamily: "Lato, sans-serif;",
  defaultRadius: "8px",
  cursorType: "pointer",
  primaryColor: "primary",
  primaryShade: { light: 5, dark: 5 },
  colors: {
    primary: [
      "#fff1e2",
      "#ffe2cd",
      "#fdc49d",
      "#fba468",
      "#f9893c",
      "#f97820",
      "#f96f0f",
      "#de5e03",
      "#c65200",
      "#ad4500",
    ],
    gray: [
      "#f5f5f5",
      "#e7e7e7",
      "#cdcdcd",
      "#b2b2b2",
      "#9a9a9a",
      "#8b8b8b",
      "#848484",
      "#717171",
      "#656565",
      "#575757",
    ],
  },
  components: {
    Table: Table.extend({
      defaultProps: {
        highlightOnHover: true,
        highlightOnHoverColor: "gray.0",
        withRowBorders: false,
        stickyHeader: true,
        cellPadding: "8px 12px",
        ff: "Lato, sans-serif",
      },
      styles(theme) {
        return {
          thead: {
            height: 44,
            backgroundColor: theme.colors.gray[0],
          },
          tbody: {
            color: theme.colors.gray[9],
          },
          tr: { height: 40 },
          td: { padding: `${theme.spacing.md} ${theme.spacing.sm}` },
          th: {},
        };
      },
    }),
    Input: TextInput.extend({
      styles(theme) {
        return {
          input: {
            background: theme.colors.gray[0],
            height: 40,
            border: "2px solid transparent",
          },
        };
      },
      defaultProps: {},
    }),
    Select: Select.extend({
      styles(theme) {
        return {
          input: {
            backgroundColor: theme.colors.gray[0],
            border: 0,
          },
          dropdown: {
            borderColor: theme.colors.gray[0],
            boxShadow: "0px 2px 4px -2px rgba(0,0,0,0.8)",
          },
        };
      },
    }),
    Button: Button.extend({
      styles() {
        return {
          root: {
            height: 40,
            textTransform: "capitalize",
          },
        };
      },
    }),
    ActionIcon: ActionIcon.extend({
      styles(theme) {
        return {
          root: {
            height: 40,
            width: 40,
          },
          icon: {
            color: theme.colors.gray[9],
            height: "20px",
            width: "20px",
          },
        };
      },
    }),
    Divider: Divider.extend({
      defaultProps: {
        size: "xs",
        color: "gray.1",
      },
    }),
    Stepper: Stepper.extend({
      defaultProps: {
        orientation: "vertical",
        display: "flex",
        w: "100%",
        iconSize: 29,
        allowNextStepsSelect: false,
      },
      styles: {
        root: { flexGrow: 1 },
        content: {
          flexGrow: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: 30,
        },
        steps: {
          borderRight: "1px solid var(--mantine-color-gray-1)",
          padding: 30,
          userSelect: "none",
          color: "var(--mantine-color-primary-8)",
          margin: 0,
        },
        stepIcon: { border: 0, borderRadius: "var(--mantine-radius-default)" },
        stepLabel: { marginTop: 5 },
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        centered: true,
        padding: "md",
        overlayProps: {
          backgroundOpacity: 0.55,
          blur: 3,
        },
        closeOnClickOutside: false,
      },
      styles: {
        header: {
          borderBottom: "1px solid var(--mantine-color-gray-2)",
        },
        body: {
          padding: "var(--mantine-spacing-md)",
        },
      },
    }),
    Anchor: Anchor.extend({
      styles: {
        root: { textDecoration: "none" },
      },
    }),
    Badge: Badge.extend({
      defaultProps: {
        variant: "light",
      },
      styles: {
        root: { borderRadius: "var(--mantine-radius-default)" },
        label: { textTransform: "capitalize" },
      },
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        multiline: true,
        withArrow: true,
        w: 250,
        transitionProps: { duration: 300 },
      },
      styles: { tooltip: { wordWrap: "break-word" } },
    }),
    Popover: Popover.extend({
      defaultProps: {
        shadow: "md",
      },
      styles: {
        dropdown: {
          border: "1px solid var(--mantine-color-gray-1)",
        },
      },
    }),
    Card: Card.extend({
      styles(theme) {
        return {
          root: {
            borderColor: theme.colors.gray[1],
          },
        };
      },
    }),
    Text: Text.extend({
      defaultProps: {
        size: "sm",
      },
    }),
    Checkbox: Checkbox.extend({
      defaultProps: {
        size: "xs",
        radius: "sm",
      },
    }),
  },
});

export const resolver: CSSVariablesResolver = () => ({
  dark: {},
  light: {},
  variables: {},
});

export const HEADER_HEIGHT = "65px";
export const NAVBAR_WIDTH = 280;

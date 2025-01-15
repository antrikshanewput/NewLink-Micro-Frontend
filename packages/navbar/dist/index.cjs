"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  SidebarDrawer: () => DrawerComponent,
  TopBar: () => TopBarComponent,
  chakraTheme: () => system
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/provider.tsx
var import_react3 = require("@chakra-ui/react");

// src/components/ui/color-mode.tsx
var import_react = require("@chakra-ui/react");
var import_next_themes = require("next-themes");
var React = __toESM(require("react"), 1);
var import_lu = require("react-icons/lu");
var import_jsx_runtime = require("react/jsx-runtime");
function ColorModeProvider(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_next_themes.ThemeProvider, { attribute: "class", disableTransitionOnChange: true, ...props });
}
function useColorMode() {
  const { resolvedTheme, setTheme } = (0, import_next_themes.useTheme)();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode
  };
}
function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lu.LuSun, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lu.LuMoon, {});
}
var ColorModeButton = React.forwardRef(function ColorModeButton2(props, ref) {
  const { toggleColorMode } = useColorMode();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Skeleton, { boxSize: "8" }), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react.IconButton,
    {
      onClick: toggleColorMode,
      variant: "ghost",
      "aria-label": "Toggle color mode",
      size: "sm",
      ref,
      ...props,
      css: {
        _icon: {
          width: "5",
          height: "5"
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorModeIcon, {})
    }
  ) });
});

// src/theme/theme.ts
var import_react2 = require("@chakra-ui/react");

// src/theme/foundations/tailwindColors.ts
var tailwindColors = {
  rose: {
    50: { value: "#fff1f2" },
    100: { value: "#ffe4e6" },
    200: { value: "#fecdd3" },
    300: { value: "#fda4af" },
    400: { value: "#fb7185" },
    500: { value: "#f43f5e" },
    600: { value: "#e11d48" },
    700: { value: "#be123c" },
    800: { value: "#9f1239" },
    900: { value: "#881337" }
  },
  pink: {
    50: { value: "#fdf2f8" },
    100: { value: "#fce7f3" },
    200: { value: "#fbcfe8" },
    300: { value: "#f9a8d4" },
    400: { value: "#f472b6" },
    500: { value: "#ec4899" },
    600: { value: "#db2777" },
    700: { value: "#be185d" },
    800: { value: "#9d174d" },
    900: { value: "#831843" }
  },
  fuchsia: {
    50: { value: "#fdf4ff" },
    100: { value: "#fae8ff" },
    200: { value: "#f5d0fe" },
    300: { value: "#f0abfc" },
    400: { value: "#e879f9" },
    500: { value: "#d946ef" },
    600: { value: "#c026d3" },
    700: { value: "#a21caf" },
    800: { value: "#86198f" },
    900: { value: "#701a75" }
  },
  purple: {
    50: { value: "#faf5ff" },
    100: { value: "#f3e8ff" },
    200: { value: "#e9d5ff" },
    300: { value: "#d8b4fe" },
    400: { value: "#c084fc" },
    500: { value: "#a855f7" },
    600: { value: "#9333ea" },
    700: { value: "#7e22ce" },
    800: { value: "#6b21a8" },
    900: { value: "#581c87" }
  },
  violet: {
    50: { value: "#f5f3ff" },
    100: { value: "#ede9fe" },
    200: { value: "#ddd6fe" },
    300: { value: "#c4b5fd" },
    400: { value: "#a78bfa" },
    500: { value: "#8b5cf6" },
    600: { value: "#7c3aed" },
    700: { value: "#6d28d9" },
    800: { value: "#5b21b6" },
    900: { value: "#4c1d95" }
  },
  indigo: {
    50: { value: "#eef2ff" },
    100: { value: "#e0e7ff" },
    200: { value: "#c7d2fe" },
    300: { value: "#a5b4fc" },
    400: { value: "#818cf8" },
    500: { value: "#6366f1" },
    600: { value: "#4f46e5" },
    700: { value: "#4338ca" },
    800: { value: "#3730a3" },
    900: { value: "#312e81" }
  },
  blue: {
    50: { value: "#eff6ff" },
    100: { value: "#dbeafe" },
    200: { value: "#bfdbfe" },
    300: { value: "#93c5fd" },
    400: { value: "#60a5fa" },
    500: { value: "#3b82f6" },
    600: { value: "#2563eb" },
    700: { value: "#1d4ed8" },
    800: { value: "#1e40af" },
    900: { value: "#1e3a8a" }
  },
  sky: {
    50: { value: "#f0f9ff" },
    100: { value: "#e0f2fe" },
    200: { value: "#bae6fd" },
    300: { value: "#7dd3fc" },
    400: { value: "#38bdf8" },
    500: { value: "#0ea5e9" },
    600: { value: "#0284c7" },
    700: { value: "#0369a1" },
    800: { value: "#075985" },
    900: { value: "#0c4a6e" }
  },
  cyan: {
    50: { value: "#ecfeff" },
    100: { value: "#cffafe" },
    200: { value: "#a5f3fc" },
    300: { value: "#67e8f9" },
    400: { value: "#22d3ee" },
    500: { value: "#06b6d4" },
    600: { value: "#0891b2" },
    700: { value: "#0e7490" },
    800: { value: "#155e75" },
    900: { value: "#164e63" }
  },
  teal: {
    50: { value: "#f0fdfa" },
    100: { value: "#ccfbf1" },
    200: { value: "#99f6e4" },
    300: { value: "#5eead4" },
    400: { value: "#2dd4bf" },
    500: { value: "#14b8a6" },
    600: { value: "#0d9488" },
    700: { value: "#0f766e" },
    800: { value: "#115e59" },
    900: { value: "#134e4a" }
  },
  emerald: {
    50: { value: "#ecfdf5" },
    100: { value: "#d1fae5" },
    200: { value: "#a7f3d0" },
    300: { value: "#6ee7b7" },
    400: { value: "#34d399" },
    500: { value: "#10b981" },
    600: { value: "#059669" },
    700: { value: "#047857" },
    800: { value: "#065f46" },
    900: { value: "#064e3b" }
  },
  green: {
    50: { value: "#f0fdf4" },
    100: { value: "#dcfce7" },
    200: { value: "#bbf7d0" },
    300: { value: "#86efac" },
    400: { value: "#4ade80" },
    500: { value: "#22c55e" },
    600: { value: "#16a34a" },
    700: { value: "#15803d" },
    800: { value: "#166534" },
    900: { value: "#14532d" }
  },
  lime: {
    50: { value: "#f7fee7" },
    100: { value: "#ecfccb" },
    200: { value: "#d9f99d" },
    300: { value: "#bef264" },
    400: { value: "#a3e635" },
    500: { value: "#84cc16" },
    600: { value: "#65a30d" },
    700: { value: "#4d7c0f" },
    800: { value: "#3f6212" },
    900: { value: "#365314" }
  },
  yellow: {
    50: { value: "#fefce8" },
    100: { value: "#fef9c3" },
    200: { value: "#fef08a" },
    300: { value: "#fde047" },
    400: { value: "#facc15" },
    500: { value: "#eab308" },
    600: { value: "#ca8a04" },
    700: { value: "#a16207" },
    800: { value: "#854d0e" },
    900: { value: "#713f12" }
  },
  amber: {
    50: { value: "#fffbeb" },
    100: { value: "#fef3c7" },
    200: { value: "#fde68a" },
    300: { value: "#fcd34d" },
    400: { value: "#fbbf24" },
    500: { value: "#f59e0b" },
    600: { value: "#d97706" },
    700: { value: "#b45309" },
    800: { value: "#92400e" },
    900: { value: "#78350f" }
  },
  orange: {
    50: { value: "#fff7ed" },
    100: { value: "#ffedd5" },
    200: { value: "#fed7aa" },
    300: { value: "#fdba74" },
    400: { value: "#fb923c" },
    500: { value: "#f97316" },
    600: { value: "#ea580c" },
    700: { value: "#c2410c" },
    800: { value: "#9a3412" },
    900: { value: "#7c2d12" }
  },
  red: {
    50: { value: "#fef2f2" },
    100: { value: "#fee2e2" },
    200: { value: "#fecaca" },
    300: { value: "#fca5a5" },
    400: { value: "#f87171" },
    500: { value: "#ef4444" },
    600: { value: "#dc2626" },
    700: { value: "#b91c1c" },
    800: { value: "#991b1b" },
    900: { value: "#7f1d1d" }
  },
  warmGray: {
    50: { value: "#fafaf9" },
    100: { value: "#f5f5f4" },
    200: { value: "#e7e5e4" },
    300: { value: "#d6d3d1" },
    400: { value: "#a8a29e" },
    500: { value: "#78716c" },
    600: { value: "#57534e" },
    700: { value: "#44403c" },
    800: { value: "#292524" },
    900: { value: "#1c1917" }
  },
  trueGray: {
    50: { value: "#fafafa" },
    100: { value: "#f5f5f5" },
    200: { value: "#e5e5e5" },
    300: { value: "#d4d4d4" },
    400: { value: "#a3a3a3" },
    500: { value: "#737373" },
    600: { value: "#525252" },
    700: { value: "#404040" },
    800: { value: "#262626" },
    900: { value: "#171717" }
  },
  gray: {
    50: { value: "#fafafa" },
    100: { value: "#f4f4f5" },
    200: { value: "#e4e4e7" },
    300: { value: "#d4d4d8" },
    400: { value: "#a1a1aa" },
    500: { value: "#71717a" },
    600: { value: "#52525b" },
    700: { value: "#3f3f46" },
    800: { value: "#27272a" },
    900: { value: "#18181b" }
  },
  coolGray: {
    50: { value: "#f9fafb" },
    100: { value: "#f3f4f6" },
    200: { value: "#e5e7eb" },
    300: { value: "#d1d5db" },
    400: { value: "#9ca3af" },
    500: { value: "#6b7280" },
    600: { value: "#4b5563" },
    700: { value: "#374151" },
    800: { value: "#1f2937" },
    900: { value: "#111827" }
  },
  blueGray: {
    50: { value: "#f8fafc" },
    100: { value: "#f1f5f9" },
    200: { value: "#e2e8f0" },
    300: { value: "#cbd5e1" },
    400: { value: "#94a3b8" },
    500: { value: "#6B6B6B" },
    //#64748b',
    600: { value: "#475569" },
    700: { value: "#334155" },
    //#20202C
    800: { value: "#1e293b" },
    900: { value: "#0f172a" }
  },
  blinkPay: {
    50: { value: "#ACA5FD" },
    100: { value: "#ACA5FD" },
    200: { value: "#ACA5FD" },
    300: { value: "#ACA5FD" },
    400: { value: "#ACA5FD" },
    500: { value: "#703DBA" },
    600: { value: "#703DBA" },
    700: { value: "#ACA5FD" },
    800: { value: "#2B2B3A" },
    900: { value: "#2B2B3A" },
    1e3: { value: "#000000" },
    1100: { value: "#FFFFFF" },
    1200: { value: "#334155" },
    1300: { value: "#EEE8F7" }
  }
};
var tailwindColors_default = tailwindColors;

// src/theme/foundations/colors.ts
var colors = {
  brand: tailwindColors_default.blinkPay,
  gray: tailwindColors_default.blueGray,
  success: tailwindColors_default.green,
  green: tailwindColors_default.green,
  error: tailwindColors_default.rose,
  red: tailwindColors_default.rose,
  warning: tailwindColors_default.amber,
  orange: tailwindColors_default.amber,
  info: tailwindColors_default.sky,
  blue: tailwindColors_default.sky
};

// src/theme/foundations/spacing.ts
var spacing = {
  "safe-top": { value: "env(safe-area-inset-top)" },
  "safe-bottom": { value: "env(safe-area-inset-bottom)" },
  "safe-left": { value: "env(safe-area-inset-left)" },
  "safe-right": { value: "env(safe-area-inset-right)" }
};

// src/theme/foundations/layout.ts
var layout = {
  breakpoints: {
    desktop: "md"
  },
  topBar: {
    height: `calc(4rem + ${spacing["safe-top"]})`
  }
};

// src/theme/foundations/shadows.ts
var shadows = {
  layout: { value: "0px 0px 24px 1px rgba(0, 0, 0, 0.05)" }
};

// src/theme/foundations/typography.ts
var typography = {
  fonts: {
    heading: {
      value: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
    },
    body: {
      value: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
    },
    mono: { value: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace` }
  }
};

// src/theme/foundations/z-index.ts
var zIndices = {
  select: 1650,
  dayPicker: 1650
};

// src/theme/foundations/index.ts
var foundations = {
  colors,
  ...typography,
  shadows,
  space: spacing,
  layout,
  zIndices
};
var foundations_default = foundations;

// src/theme/styles.ts
var globalStyles = {
  html: {
    bg: "gray.50",
    _dark: {
      bg: "gray.800"
    }
  },
  body: {
    overflowY: "scroll",
    WebkitTapHighlightColor: "transparent",
    bg: "gray.50",
    _dark: {
      bg: "gray.800"
    },
    display: "block",
    placeItems: "normal"
  },
  "#chakra-toast-portal > *": {
    pt: "safe-top",
    pl: "safe-left",
    pr: "safe-right",
    pb: "safe-bottom"
  },
  ".navbar-header img": {
    height: "40px"
  },
  ".drawer-header img": {
    height: "40px"
  }
};

// src/theme/theme.ts
var config = (0, import_react2.defineConfig)({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
        },
        body: {
          value: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
        },
        mono: { value: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace` }
      },
      colors: foundations_default.colors
    }
  },
  globalCss: { ...globalStyles }
});
var system = (0, import_react2.createSystem)(import_react2.defaultConfig, config);

// src/components/ui/provider.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Provider(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.ChakraProvider, { value: system, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ColorModeProvider, { ...props }) });
}

// src/components/Drawer/Drawer.tsx
var import_react8 = __toESM(require("react"), 1);
var import_react9 = require("@chakra-ui/react");

// src/components/ui/drawer.tsx
var import_react5 = require("@chakra-ui/react");

// src/components/ui/close-button.tsx
var import_react4 = require("@chakra-ui/react");
var React2 = __toESM(require("react"), 1);
var import_lu2 = require("react-icons/lu");
var import_jsx_runtime3 = require("react/jsx-runtime");
var CloseButton = React2.forwardRef(function CloseButton2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.IconButton, { variant: "ghost", "aria-label": "Close", ref, ...props, children: props.children ?? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lu2.LuX, {}) });
});

// src/components/ui/drawer.tsx
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var DrawerContent = React3.forwardRef(function DrawerContent2(props, ref) {
  const { children, portalled = true, portalRef, offset, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Portal, { disabled: !portalled, container: portalRef, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Drawer.Positioner, { padding: offset, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react5.Drawer.Content, { ref, ...rest, asChild: false, children }) }) });
});
var DrawerCloseTrigger = React3.forwardRef(function DrawerCloseTrigger2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_react5.Drawer.CloseTrigger,
    {
      position: "absolute",
      top: "2",
      insetEnd: "2",
      ...props,
      asChild: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CloseButton, { size: "sm", ref })
    }
  );
});
var DrawerTrigger = import_react5.Drawer.Trigger;
var DrawerRoot = import_react5.Drawer.Root;
var DrawerFooter = import_react5.Drawer.Footer;
var DrawerHeader = import_react5.Drawer.Header;
var DrawerBody = import_react5.Drawer.Body;
var DrawerBackdrop = import_react5.Drawer.Backdrop;
var DrawerDescription = import_react5.Drawer.Description;
var DrawerTitle = import_react5.Drawer.Title;
var DrawerActionTrigger = import_react5.Drawer.ActionTrigger;

// src/components/Drawer/MainMenuItem.tsx
var import_react6 = require("@chakra-ui/react");
var import_react_router_dom = require("react-router-dom");
var import_jsx_runtime5 = require("react/jsx-runtime");
function MainMenuItem({ handleClose, to, ...rest }) {
  const { pathname } = (0, import_react_router_dom.useLocation)();
  const isActive = to === "/" ? pathname === "/" : pathname?.startsWith(to);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react6.Box,
    {
      bg: "transparent",
      to,
      justifyContent: "flex-start",
      position: "relative",
      opacity: isActive ? 1 : 0.8,
      fontWeight: "bold",
      borderRadius: "md",
      px: "3",
      py: "1",
      color: "#000000",
      _hover: {
        bg: "gray.100",
        color: "#000000"
      },
      _focusVisible: {
        outline: "none",
        _after: {
          opacity: 1,
          w: "2rem"
        }
      },
      _focus: { bg: "gray.100" },
      onClick: handleClose,
      ...rest
    }
  );
}

// src/components/ui/clipboard.tsx
var import_react7 = require("@chakra-ui/react");
var React4 = __toESM(require("react"), 1);
var import_lu3 = require("react-icons/lu");
var import_jsx_runtime6 = require("react/jsx-runtime");
var ClipboardIcon = React4.forwardRef(function ClipboardIcon2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Clipboard.Indicator, { copied: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lu3.LuCheck, {}), ...props, ref, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lu3.LuClipboard, {}) });
});
var ClipboardCopyText = React4.forwardRef(function ClipboardCopyText2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Clipboard.Indicator, { copied: "Copied", ...props, ref, children: "Copy" });
});
var ClipboardLabel = React4.forwardRef(function ClipboardLabel2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_react7.Clipboard.Label,
    {
      textStyle: "sm",
      fontWeight: "medium",
      display: "inline-block",
      mb: "1",
      ...props,
      ref
    }
  );
});
var ClipboardButton = React4.forwardRef(
  function ClipboardButton2(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Clipboard.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react7.Button, { ref, size: "sm", variant: "surface", ...props, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ClipboardIcon, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ClipboardCopyText, {})
    ] }) });
  }
);
var ClipboardLink = React4.forwardRef(
  function ClipboardLink2(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Clipboard.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      import_react7.Button,
      {
        unstyled: true,
        variant: "plain",
        size: "xs",
        display: "inline-flex",
        alignItems: "center",
        gap: "2",
        ref,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lu3.LuLink, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ClipboardCopyText, {})
        ]
      }
    ) });
  }
);
var ClipboardIconButton = React4.forwardRef(function ClipboardIconButton2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Clipboard.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react7.IconButton, { ref, size: "xs", variant: "subtle", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ClipboardIcon, {}),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ClipboardCopyText, { srOnly: true })
  ] }) });
});
var ClipboardInput = React4.forwardRef(
  function ClipboardInputElement(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Clipboard.Input, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react7.Input, { ref, ...props }) });
  }
);
var ClipboardRoot = import_react7.Clipboard.Root;

// src/components/Drawer/Drawer.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var AccountNumber = ({ hederaAccountId, ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      import_react9.Flex,
      {
        role: "group",
        position: "relative",
        w: "full",
        textAlign: "center",
        justifyContent: "center",
        px: "3",
        py: "2",
        fontSize: "16px",
        fontWeight: "bold",
        alignItems: "center",
        outline: "none",
        color: "gray.500",
        gap: "2",
        _hover: { bg: "none" },
        _focusVisible: { bg: "gray.50" },
        _dark: {
          color: "gray.200",
          _focusVisible: { bg: "gray.800" },
          _hover: { bg: "none" }
        },
        ...rest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react9.Text, { as: "span", fontSize: "12px", children: "Hedera Account:" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react9.Text, { as: "span", textDecoration: "underline", color: "brand.600", _dark: { color: "brand.400" }, children: hederaAccountId }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ClipboardRoot, { value: hederaAccountId, timeout: 1e3, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(ClipboardIconButton, { bg: "transparent" }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      import_react9.Separator,
      {
        border: 0,
        borderBottom: "1px solid",
        borderColor: "inherit",
        marginTop: "var(--chakra-space-1)",
        marginBottom: "var(--chakra-space-1)",
        opacity: "0.6"
      }
    )
  ] });
};
function NavDrawer({
  menuList,
  HeaderLogo,
  isOpen,
  onClose,
  hederaAccountId,
  handleClose,
  styling
}) {
  const orderedMenuList = menuList.sort((a, b) => a.order - b.order);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(DrawerRoot, { open: isOpen, onOpenChange: onClose, placement: "end", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DrawerBackdrop, {}),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(DrawerContent, { ...styling, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DrawerHeader, { className: "drawer-header", pt: "4", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(HeaderLogo, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DrawerBody, { p: "2", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react9.Stack, { direction: "column", gap: "1", children: [
        orderedMenuList.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react8.default.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MainMenuItem, { handleClose, ...item.menuItemProps, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react9.Flex, { flexDirection: "column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react9.Text, { w: "100%", fontSize: "16px", lineHeight: "1.5rem", marginBottom: "0", fontWeight: "600", children: item.title }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react9.Text, { fontSize: "12px", lineHeight: "1.2rem", fontWeight: "400", children: item.description })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_react9.Separator,
            {
              border: 0,
              borderBottom: "1px solid",
              borderColor: "inherit",
              marginTop: "var(--chakra-space-1)",
              marginBottom: "var(--chakra-space-1)",
              opacity: "0.6"
            }
          )
        ] }, index)),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(AccountNumber, { hederaAccountId })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        DrawerCloseTrigger,
        {
          asChild: true,
          bg: "transparent",
          _hover: { bgColor: "transparent", border: "none", outline: "none" },
          top: "3"
        }
      )
    ] })
  ] });
}

// src/components/Drawer/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function DrawerComponent({ props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Provider, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(NavDrawer, { ...props }) });
}

// src/components/TopBar/index.tsx
var import_react12 = __toESM(require("react"), 1);
var import_react13 = require("@chakra-ui/react");
var import_react_router_dom2 = require("react-router-dom");

// src/assets/Logo/CaratLogo.tsx
var import_react10 = require("@chakra-ui/react");
var import_jsx_runtime9 = require("react/jsx-runtime");
var CaratLogo = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_react10.chakra.svg, { width: "136px", height: "31px", viewBox: "0 0 136 31", ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M17.4153 21.0665C17.0457 21.5772 16.5972 22.056 16.0693 22.505C15.5413 22.9535 14.9563 23.3451 14.3143 23.6793C13.6719 24.0136 12.9771 24.2777 12.2294 24.4711C11.4812 24.6645 10.7028 24.7612 9.89373 24.7612C8.55649 24.7612 7.33376 24.5322 6.22555 24.0752C5.11708 23.6177 4.16244 22.98 3.36217 22.1617C2.56137 21.3439 1.94097 20.3762 1.50151 19.2587C1.06153 18.1417 0.841797 16.9148 0.841797 15.577C0.841797 14.2754 1.06153 13.0569 1.50151 11.9221C1.94097 10.7871 2.56137 9.80214 3.36217 8.96627C4.16244 8.13066 5.12106 7.47094 6.23857 6.98684C7.35581 6.50328 8.59156 6.26123 9.9466 6.26123C11.5827 6.26123 13.0122 6.5604 14.2352 7.15848C15.4576 7.75683 16.4739 8.619 17.2832 9.74475L14.5649 12.3573C14.0372 11.6184 13.4126 11.0246 12.6912 10.5761C11.9696 10.1273 11.1077 9.9031 10.1049 9.9031C9.31318 9.9031 8.60058 10.0482 7.96717 10.3386C7.33376 10.6287 6.79706 11.0291 6.35733 11.5392C5.91734 12.0499 5.57885 12.6437 5.34131 13.3207C5.10379 13.9982 4.98502 14.7154 4.98502 15.4715C4.98502 16.2463 5.10378 16.9674 5.34131 17.6359C5.57885 18.3043 5.91734 18.8852 6.35733 19.3778C6.79706 19.8703 7.32472 20.2577 7.94087 20.5388C8.55648 20.8205 9.25127 20.9608 10.0258 20.9608C10.6592 20.9608 11.2089 20.8949 11.6752 20.7631C12.1412 20.6313 12.5546 20.4554 12.9155 20.2354C13.276 20.0154 13.5972 19.7603 13.8789 19.4697C14.16 19.1795 14.4331 18.8851 14.6969 18.586L17.4153 21.0665Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M24.673 6.71021H29.0803L35.5197 24.3132H31.1652L29.8192 20.2752H23.6174L22.2714 24.3132H18.1016L24.673 6.71021ZM28.8691 17.1873L26.7316 10.537L24.5409 17.1873H28.8691Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M37.4404 6.71021H43.9855C45.0055 6.71021 45.9028 6.85554 46.6773 7.14568C47.4513 7.43608 48.098 7.83196 48.6171 8.33333C49.1358 8.8347 49.5229 9.41975 49.7782 10.0882C50.033 10.7573 50.1608 11.4696 50.1608 12.226C50.1608 13.3698 49.9103 14.368 49.4089 15.2214C48.9073 16.0751 48.1989 16.7569 47.2844 17.2665L51.1901 24.3132H46.8093L43.5368 17.8473H41.3201V24.3132H37.4404L37.4404 6.71021ZM43.7743 14.6539C44.5132 14.6539 45.0938 14.4342 45.5162 13.9942C45.9384 13.5545 46.1496 13.0002 46.1496 12.3315C46.1496 11.6104 45.9384 11.0384 45.5162 10.6162C45.0938 10.194 44.5132 9.98277 43.7743 9.98277H41.3201V14.6539L43.7743 14.6539Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M58.505 6.71021H62.9123L69.3517 24.3132H64.9972L63.6512 20.2752H57.4494L56.1034 24.3132H51.9336L58.505 6.71021ZM62.7011 17.1873L60.5636 10.537L58.373 17.1873H62.7011Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M72.97 10.2203H67.2695V6.71021H82.6553V10.2203H76.9814V24.3132H72.97V10.2203Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M85.7641 19.0629C85.9923 19.3095 86.2606 19.5598 86.5689 19.8149C86.8765 20.0699 87.2198 20.3032 87.5982 20.5142C87.9765 20.7251 88.3897 20.8968 88.8381 21.0291C89.2872 21.1609 89.766 21.2268 90.2766 21.2268C90.5758 21.2268 90.8744 21.1832 91.1736 21.095C91.4728 21.0068 91.7454 20.8798 91.9919 20.7124C92.238 20.545 92.4362 20.3425 92.586 20.105C92.7348 19.8675 92.8103 19.5997 92.8103 19.3005C92.8103 18.6495 92.4936 18.1437 91.8602 17.7828C91.2267 17.4226 90.224 17.066 88.8514 16.7142C88.1827 16.5559 87.5626 16.3274 86.9913 16.0277C86.419 15.7288 85.9264 15.3679 85.5132 14.9458C85.0996 14.5233 84.7783 14.0397 84.5501 13.4943C84.3211 12.9491 84.2068 12.342 84.2068 11.6732C84.2068 10.9343 84.3389 10.2395 84.6027 9.5883C84.8668 8.93762 85.2667 8.36106 85.8037 7.8597C86.3398 7.35833 87.0083 6.96245 87.8091 6.67204C88.6096 6.38191 89.555 6.23657 90.6459 6.23657C91.5434 6.23657 92.3352 6.32903 93.0212 6.51369C93.7073 6.69861 94.2923 6.91861 94.7764 7.17341C95.26 7.42874 95.6559 7.69257 95.9635 7.96518C96.2712 8.23831 96.505 8.45352 96.6634 8.61188L94.3672 11.1453C94.1733 10.9869 93.949 10.8155 93.694 10.6306C93.4389 10.446 93.153 10.2746 92.8363 10.1162C92.5196 9.95789 92.1721 9.82584 91.7943 9.72036C91.4154 9.61461 91.0152 9.562 90.5933 9.562C90.3117 9.562 90.0343 9.6061 89.7617 9.69379C89.4891 9.782 89.2425 9.90076 89.0231 10.0501C88.8025 10.1999 88.6272 10.3758 88.4954 10.578C88.3631 10.7805 88.2972 10.9962 88.2972 11.2244C88.2972 11.8228 88.6139 12.3066 89.2473 12.6759C89.8807 13.0455 90.7517 13.3535 91.8602 13.5998C92.5106 13.7581 93.1488 13.9736 93.7731 14.2462C94.3975 14.5193 94.9565 14.8756 95.4491 15.3151C95.9417 15.7551 96.3376 16.296 96.6368 16.9385C96.936 17.5809 97.0853 18.3594 97.0853 19.2739C97.0853 20.0657 96.9094 20.7958 96.5576 21.4643C96.2053 22.1333 95.7265 22.7136 95.1192 23.2062C94.5123 23.6988 93.7997 24.0814 92.9814 24.354C92.1636 24.6266 91.2793 24.7632 90.3292 24.7632C89.4492 24.7632 88.649 24.6797 87.9281 24.5123C87.2065 24.345 86.5556 24.1255 85.975 23.8529C85.3945 23.5803 84.8708 23.2678 84.4048 22.9161C83.9385 22.5643 83.5381 22.2035 83.2041 21.8336L85.7641 19.0629Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M118.137 24.8863L108.751 15.4999L118.137 6.1135L127.524 15.4999L118.137 24.8863ZM113.078 15.4999L118.137 20.5595L123.197 15.4999L118.137 10.4403L113.078 15.4999ZM118.137 24.8863L108.751 15.4999L118.137 6.1135L127.524 15.4999L118.137 24.8863ZM113.078 15.4999L118.137 20.5595L123.197 15.4999L118.137 10.4403L113.078 15.4999ZM133.295 15.4999C133.295 23.8714 126.509 30.6578 118.137 30.6578C109.766 30.6578 102.979 23.8714 102.979 15.4999C102.979 7.12846 109.766 0.342041 118.137 0.342041C126.509 0.342041 133.295 7.12846 133.295 15.4999ZM118.137 3.63293C111.583 3.63293 106.27 8.94597 106.27 15.4999C106.27 22.0539 111.583 27.3669 118.137 27.3669C124.691 27.3669 130.004 22.0539 130.004 15.4999C130.004 8.94597 124.691 3.63293 118.137 3.63293Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M132.772 1.28351H133.571C133.702 1.28351 133.812 1.30358 133.899 1.34373C133.991 1.38022 134.065 1.42766 134.124 1.48604C134.182 1.54078 134.224 1.60281 134.25 1.67215C134.275 1.74148 134.288 1.80534 134.288 1.86373C134.288 1.96955 134.259 2.07173 134.2 2.17025C134.146 2.26878 134.065 2.34541 133.96 2.40015L134.414 3.18288H133.866L133.467 2.48225H133.259V3.18288H132.772V1.28351ZM133.554 2.09362C133.646 2.09362 133.708 2.07537 133.741 2.03888C133.777 2.00239 133.795 1.95495 133.795 1.89657C133.795 1.76155 133.715 1.69404 133.554 1.69404H133.259V2.09362H133.554ZM133.505 4.16267C133.239 4.16267 132.991 4.11341 132.761 4.01488C132.531 3.91636 132.33 3.78134 132.159 3.60983C131.991 3.43467 131.858 3.23215 131.759 3.00225C131.661 2.76871 131.611 2.51874 131.611 2.25236C131.611 1.98597 131.661 1.73783 131.759 1.50794C131.858 1.27439 131.991 1.07187 132.159 0.900357C132.33 0.728848 132.531 0.59383 132.761 0.495304C132.994 0.393129 133.244 0.342041 133.511 0.342041C133.777 0.342041 134.025 0.393129 134.255 0.495304C134.485 0.59383 134.684 0.728848 134.852 0.900357C135.023 1.07187 135.158 1.27439 135.257 1.50794C135.355 1.73783 135.405 1.98597 135.405 2.25236C135.405 2.51874 135.355 2.76871 135.257 3.00225C135.158 3.23215 135.023 3.43467 134.852 3.60983C134.68 3.78134 134.48 3.91636 134.25 4.01488C134.02 4.11341 133.772 4.16267 133.505 4.16267ZM133.505 3.70836C133.706 3.70836 133.892 3.67187 134.064 3.59888C134.235 3.52225 134.383 3.42008 134.507 3.29236C134.635 3.16099 134.733 3.00773 134.802 2.83257C134.875 2.65376 134.912 2.46036 134.912 2.25236C134.912 2.04801 134.875 1.85825 134.802 1.68309C134.733 1.50429 134.635 1.3492 134.507 1.21783C134.383 1.08646 134.235 0.984287 134.064 0.911304C133.892 0.834673 133.708 0.796357 133.511 0.796357C133.31 0.796357 133.124 0.834673 132.952 0.911304C132.781 0.984287 132.631 1.08646 132.504 1.21783C132.379 1.3492 132.281 1.50429 132.208 1.68309C132.135 1.85825 132.098 2.04801 132.098 2.25236C132.098 2.46036 132.133 2.65376 132.202 2.83257C132.275 3.00773 132.374 3.16099 132.498 3.29236C132.626 3.42008 132.775 3.52225 132.947 3.59888C133.118 3.67187 133.305 3.70836 133.505 3.70836Z" })
  ] });
};

// src/assets/Logo/IconHamburger.tsx
var import_react11 = require("@chakra-ui/react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var IconHamburger = ({ ...rest }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react11.chakra.svg, { width: "29px", height: "29px", viewBox: "0 0 29 29", ...rest, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "rect",
      {
        y: "14.1421",
        width: "4",
        height: "4",
        transform: "rotate(-45 0 14.1421)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "rect",
      {
        x: "5.65723",
        y: "8.48523",
        width: "4",
        height: "4",
        transform: "rotate(-45 5.65723 8.48523)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "rect",
      {
        x: "11.3135",
        y: "2.82837",
        width: "4",
        height: "4",
        transform: "rotate(-45 11.3135 2.82837)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "rect",
      {
        x: "5.65723",
        y: "19.799",
        width: "4",
        height: "4",
        transform: "rotate(-45 5.65723 19.799)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "rect",
      {
        x: "11.3135",
        y: "14.1421",
        width: "4",
        height: "4",
        transform: "rotate(-45 11.3135 14.1421)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "rect",
      {
        x: "16.9707",
        y: "8.48523",
        width: "4",
        height: "4",
        transform: "rotate(-45 16.9707 8.48523)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "rect",
      {
        x: "11.3135",
        y: "25.4558",
        width: "4",
        height: "4",
        transform: "rotate(-45 11.3135 25.4558)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "rect",
      {
        x: "16.9707",
        y: "19.799",
        width: "4",
        height: "4",
        transform: "rotate(-45 16.9707 19.799)",
        fill: "white"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "rect",
      {
        x: "22.627",
        y: "14.1421",
        width: "4",
        height: "4",
        transform: "rotate(-45 22.627 14.1421)",
        fill: "white"
      }
    )
  ] });
};
var IconHamburger_default = IconHamburger;

// src/components/TopBar/index.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var MenuButton = import_react12.default.forwardRef((props, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_react13.IconButton,
    {
      "aria-label": "Navigation",
      variant: "ghost",
      _active: { bg: "gray.100" },
      _hover: { bg: "gray.200" },
      _dark: { _hover: { bg: "whiteAlpha.200" } },
      ...props,
      ref,
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IconHamburger_default, { fontSize: "2xl", stroke: "black" })
    }
  );
});
var menuListConfig = [
  {
    title: "Profile",
    description: "Update name, email or default location, delete account",
    menuItemProps: {
      to: "/profile",
      as: import_react_router_dom2.Link
    },
    order: 1
  },
  {
    title: "Transactions",
    description: "View the history of payments sent and received",
    menuItemProps: {
      to: "/transactions",
      as: import_react_router_dom2.Link
    },
    order: 2
  },
  {
    title: "Purchase",
    description: "View the history of purchase transactions",
    menuItemProps: {
      to: "/purchase",
      as: import_react_router_dom2.Link
    },
    order: 3
  },
  {
    title: "Logout",
    description: "",
    menuItemProps: {
      onClick: () => console.log("Logged out succesfully")
    },
    order: 1e5
  }
];
function TopBar({ menuList, HeaderLogo, onClose, hederaAccountId }) {
  const NavBarHeaderLogo = HeaderLogo ? HeaderLogo : () => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CaratLogo, { fontSize: "150px", fill: "brand.600", _dark: { fill: "white" } });
  const btnRef = (0, import_react12.useRef)(null);
  const [drawerIsOpen, setDrawerIsOpen] = (0, import_react12.useState)(false);
  const menuOptions = menuList ? [...menuListConfig, ...menuList] : menuListConfig;
  const handleOpenDrawer = () => setDrawerIsOpen(true);
  const handleCloseDrawer = () => {
    setDrawerIsOpen(false);
    if (onClose) onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      import_react13.Flex,
      {
        position: "fixed",
        top: "0",
        insetStart: "0",
        insetEnd: "0",
        maxW: "80ch",
        m: "auto",
        align: "center",
        pt: "safe-top",
        px: "5",
        h: "64px",
        bg: "gray.50",
        color: "gray.800",
        justifyContent: "space-between",
        _dark: {
          bg: "gray.800",
          color: "gray.50"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_router_dom2.Link, { className: "navbar-header", to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(NavBarHeaderLogo, { className: "navbar-header" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            MenuButton,
            {
              ref: btnRef,
              display: { base: "flex" },
              mr: "-0.5rem",
              borderRadius: "full",
              _focusVisible: { shadow: "outline" },
              onClick: handleOpenDrawer
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react13.Box, {}),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      NavDrawer,
      {
        menuList: menuOptions,
        HeaderLogo: NavBarHeaderLogo,
        btnRef,
        isOpen: drawerIsOpen,
        handleClose: handleCloseDrawer,
        onClose: handleCloseDrawer,
        hederaAccountId: hederaAccountId ? hederaAccountId : "0.0.5101947"
      }
    )
  ] });
}
function TopBarComponent(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Provider, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(TopBar, { ...props }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SidebarDrawer,
  TopBar,
  chakraTheme
});

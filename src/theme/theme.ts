const theme = {
  colors: {
    text: "#fff",
    background: "#060606",
    primary: "#3cf",
    secondary: "#e0f",
    muted: "#191919",
    highlight: "#29112c",
    gray: "#999",
    purple: "#c0f"
  },
  fonts: {
    body: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    72
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  "lineHeights": {
    "body": 1.5,
    "heading": 1.25
  },
  "textStyles": {
    "heading": {
      "fontFamily": "heading",
      "fontWeight": "heading",
      "lineHeight": "heading"
    },
  },
  "styles": {
    "Container": {
      "p": 3,
      "maxWidth": 1024
    },
    "root": {
      "fontFamily": "body",
      "lineHeight": "body",
      "fontWeight": "body"
    },
    "h1": {
      "variant": "textStyles.display"
    },
    "h2": {
      "variant": "textStyles.heading",
      "fontSize": 5
    },
    "h3": {
      "variant": "textStyles.heading",
      "fontSize": 4
    },
    "h4": {
      "variant": "textStyles.heading",
      "fontSize": 3
    },
    "h5": {
      "variant": "textStyles.heading",
      "fontSize": 2
    },
    "h6": {
      "variant": "textStyles.heading",
      "fontSize": 1
    },
    "a": {
      "color": "primary",
      "&:hover": {
        "color": "secondary"
      }
    },
    "pre": {
      "variant": "prism",
      "fontFamily": "monospace",
      "fontSize": 1,
      "p": 3,
      "color": "text",
      "bg": "muted",
      "overflow": "auto",
      "code": {
        "color": "inherit"
      }
    },
    "code": {
      "fontFamily": "monospace",
      "color": "secondary",
      "fontSize": 1
    },
    "inlineCode": {
      "fontFamily": "monospace",
      "color": "secondary",
      "bg": "muted"
    },
    "th": {
      "verticalAlign": "bottom",
      "borderBottomWidth": "2px"
    },
    "td": {
      "verticalAlign": "top",
      "borderBottomWidth": "1px"
    },
    "hr": {
      "border": 0,
      "borderBottom": "1px solid",
      "borderColor": "muted"
    },
    "img": {
      "maxWidth": "100%"
    }
  },
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    }
  },
}
export default theme
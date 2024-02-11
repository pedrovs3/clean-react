module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:@liferay/react",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "@liferay", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": ["off"],
    "quote-props": ["off"],
    "sort-keys": ["warn"],
    "@liferay/empty-line-between-elements": ["off"],
    "@liferay/group-imports": ["off"],
    "@liferay/sort-imports": ["off"],
    "@liferay/sort-import-destructures": ["off"],
    "import/no-unresolved": ["off"],
    "import/no-named-as-default": ["off"],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "default-case": ["off"]
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              ["^react", "^\\u0000"],
              [
                "^@tanstack/react-query",
                "^axios",
                "^@hookform/resolvers",
                "^react-hook-form",
                "^styled-components",
              ],
              ["^(@contexts)(/.*|$)", "^(@hooks)(/.*|$)", "^(@services)(/.*|$)"],
              ["^(@components)(/.*|$)", "^(@/components)(/.*|$)", ],
              ["^(@assets)(/.*|$)", "^(@styles)(/.*|$)", "^(@types)(/.*|$)", "^(@models)(/.*|$)", "^.+\\.?(css)$"],
              ["^\\u0000"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ]
          },
        ],
      },
    },
  ],
};

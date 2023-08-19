module.exports = {
  "presets": [["@babel/preset-env", {"targets": {"node": "current"}}],
            ["@babel/preset-react", {"runtime": "automatic"}] // to enable jsx in testing
  ],
};
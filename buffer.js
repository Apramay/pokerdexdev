// buffer.js
const script = document.createElement("script");
script.src = "https://jspm.dev/buffer";  // Use jspm.dev to load the Buffer module
script.onload = () => {
  window.Buffer = buffer.Buffer;  // Assign to window and globalThis
  globalThis.Buffer = buffer.Buffer;
  console.log("✅ Buffer polyfill loaded");
};
document.head.appendChild(script);

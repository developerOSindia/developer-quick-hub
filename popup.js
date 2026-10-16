/**
 * DeveloperOS Quick Hub Extension Logic
 * Zero external network communication. 100% offline.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Tabs switching
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const targetId = `pane-${tab.getAttribute("data-tab")}`;
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add("active");
    });
  });

  // JWT Decoder
  const btnJwt = document.getElementById("btn-decode-jwt");
  if (btnJwt) {
    btnJwt.addEventListener("click", () => {
      const token = (document.getElementById("jwt-input").value || "").trim();
      const output = document.getElementById("jwt-output");
      try {
        const parts = token.split(".");
        if (parts.length < 2) throw new Error("Invalid JWT token structure.");
        const payloadBase64 = parts[1].replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(payloadBase64)
            .split("")
            .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
        output.textContent = JSON.stringify(JSON.parse(jsonPayload), null, 2);
      } catch (err) {
        output.textContent = "Error: " + err.message;
      }
    });
  }

  // Base64 Encode / Decode
  const btnB64Enc = document.getElementById("btn-b64-encode");
  const btnB64Dec = document.getElementById("btn-b64-decode");
  const b64In = document.getElementById("b64-input");
  const b64Out = document.getElementById("b64-output");

  if (btnB64Enc && b64In && b64Out) {
    btnB64Enc.addEventListener("click", () => {
      try {
        b64Out.textContent = btoa(b64In.value);
      } catch (e) {
        b64Out.textContent = "Encoding Error: " + e.message;
      }
    });
  }

  if (btnB64Dec && b64In && b64Out) {
    btnB64Dec.addEventListener("click", () => {
      try {
        b64Out.textContent = atob(b64In.value);
      } catch (e) {
        b64Out.textContent = "Decoding Error: Invalid Base64";
      }
    });
  }

  // UUIDv4 Generator
  const btnUuid = document.getElementById("btn-gen-uuid");
  const uuidOut = document.getElementById("uuid-output");
  if (btnUuid && uuidOut) {
    btnUuid.addEventListener("click", () => {
      const uuid = crypto.randomUUID ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
      );
      uuidOut.textContent = uuid;
    });
  }

  // Quick Copy Feedback Helper
  function attachCopyHandler(buttonId, textSourceId) {
    const btn = document.getElementById(buttonId);
    const source = document.getElementById(textSourceId);
    if (btn && source) {
      btn.addEventListener("click", () => {
        const text = source.textContent || source.value || "";
        if (!text || text === "Waiting for input..." || text === "Click generate...") return;
        navigator.clipboard.writeText(text).then(() => {
          const original = btn.textContent;
          btn.textContent = "✓ Copied!";
          btn.style.color = "#10b981";
          setTimeout(() => {
            btn.textContent = original;
            btn.style.color = "";
          }, 1500);
        });
      });
    }
  }

  attachCopyHandler("btn-copy-jwt", "jwt-output");
  attachCopyHandler("btn-copy-b64", "b64-output");
  attachCopyHandler("btn-copy-uuid", "uuid-output");
});

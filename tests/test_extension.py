"""
Automated validation for Chrome extension assets and manifest.
"""

import json
import unittest
from pathlib import Path

EXT_ROOT = Path(__file__).resolve().parent.parent


class TestExtension(unittest.TestCase):
    def test_manifest_v3_validity(self):
        manifest_file = EXT_ROOT / "manifest.json"
        self.assertTrue(manifest_file.exists())
        with open(manifest_file, "r", encoding="utf-8") as f:
            manifest = json.load(f)

        self.assertEqual(manifest.get("manifest_version"), 3)
        self.assertEqual(manifest.get("name"), "DeveloperOS Quick Hub")
        self.assertIn("storage", manifest.get("permissions", []))
        self.assertNotIn("<all_urls>", manifest.get("permissions", []))
        self.assertIn("action", manifest)
        self.assertEqual(manifest["action"]["default_popup"], "popup.html")

    def test_popup_assets(self):
        self.assertTrue((EXT_ROOT / "popup.html").exists())
        self.assertTrue((EXT_ROOT / "popup.css").exists())
        self.assertTrue((EXT_ROOT / "popup.js").exists())

    def test_popup_html_content(self):
        content = (EXT_ROOT / "popup.html").read_text(encoding="utf-8")
        self.assertIn("DeveloperOS Quick Hub", content)
        self.assertIn('id="jwt-input"', content)
        self.assertIn('id="b64-input"', content)
        self.assertIn('id="pane-uuid"', content)

    def test_popup_js_logic(self):
        js = (EXT_ROOT / "popup.js").read_text(encoding="utf-8")
        self.assertIn("DOMContentLoaded", js)
        self.assertIn("addEventListener", js)


if __name__ == "__main__":
    unittest.main()

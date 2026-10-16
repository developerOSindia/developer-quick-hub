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

    def test_popup_assets(self):
        self.assertTrue((EXT_ROOT / "popup.html").exists())
        self.assertTrue((EXT_ROOT / "popup.css").exists())
        self.assertTrue((EXT_ROOT / "popup.js").exists())


if __name__ == "__main__":
    unittest.main()

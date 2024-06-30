// Copyright (c) 2024, HD and contributors
// For license information, please see license.txt

frappe.ui.form.on("Client Side Programming", {
	refresh(frm) {

		frappe.msgprint(frm.doc.first_name)

	},
});


// Copyright (c) 2024, HD and contributors
// For license information, please see license.txt

frappe.ui.form.on("Test DocType", {
	refresh(frm) {
// frappe.msgprint("Hi there !")
 frappe.msgprint(frm.doc.first_name)
 frm.set_df_property('first_name', 'read_only', !frm.is_new());
 frm.set_value('fullname', frm.doc.first_name+" "+ frm.doc.last_name)
	}

});


frappe.ui.form.on('Families', { // The child table is defined in a DoctType called "Dynamic Link"
    // cdt is Child DocType name i.e Quotation Item
    // cdn is the row name for e.g bbfcb8da6a
    item_code(frm, cdt, cdn) {
        let row = frappe.get_doc(cdt, cdn);
        console.log(row);
    }
});
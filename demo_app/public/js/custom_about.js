frappe.ui.misc.about = function() {
    const about_content = `
        <div id="custom-about-content">
            <h3>Frappe Framework</h3>
            <p>Version: ${frappe.boot.version}</p>
            <p>© ${new Date().getFullYear()} Frappe Technologies Pvt. Ltd.</p>
            <p>Open Source Applications for the Web</p>
        </div>`;
    
    // const d = new frappe.ui.Dialog({
    //     title: __('About'),
    //     content: about_content,
    //     primary_action_label: __('Close'),
    //     primary_action: function() {
    //         d.hide();
    //     }
    // });

    // Hide the content immediately
    d.$wrapper.find('#custom-about-content').hide();

    d.show();
};

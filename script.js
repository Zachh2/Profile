$(document).ready(function() {
    $.sweetModal({
      content: 'Warning: Please proceed with caution!',
      buttons: {
        ok: {
          label: 'Proceed',
          action: function() {
            $.sweetModal.close();
            $.sweetModal({
              content: 'Welcome to your profile!',
              buttons: {
                ok: {
                  label: 'Got it',
                  action: function() {
                    $.sweetModal.close();
                  }
                }
              }
            });
          }
        }
      }
    });
  });
  
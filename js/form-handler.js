/**
 * Form Handler for Antu Education Research Forms
 * Handles AJAX submission to Formspree and redirects back to the landing page.
 */
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn ? submitBtn.textContent : '提交';

  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Basic validation check (built-in HTML5 validation)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Prepare data
    const formData = new FormData(form);
    
    // Update button state (UX: visual feedback during submission)
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = '傳送中...';
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Successful submission
        alert('感謝您的回饋！我們將根據您的建議持續完善平台。');
        // Redirect back to landing page questionnaire section
        window.location.href = '../index.html';
      } else {
        const data = await response.json();
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
          alert('傳送發生錯誤: ' + data["errors"].map(error => error["message"]).join(", "));
        } else {
          alert('抱歉，傳送時發生錯誤。請稍後再試。');
        }
        resetButton();
      }
    } catch (error) {
      alert('網路連線似乎有問題，請檢查您的網路狀態。');
      resetButton();
    }
  });

  function resetButton() {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  }
});

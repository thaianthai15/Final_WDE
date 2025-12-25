document.addEventListener('DOMContentLoaded', function() {
    const btnPlan = document.getElementById('btn-open-modal');
    const planModal = new bootstrap.Modal(document.getElementById('planModal'));

    if (btnPlan) {
        btnPlan.addEventListener('click', function() {
            planModal.show();
        });
    }

    const allButtons = document.querySelectorAll('.btn-main');
    
    allButtons.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            this.style.transform = "scale(0.95)";
        });

        btn.addEventListener('mouseup', function() {
            this.style.transform = "scale(1)";
        });
    });

    const planForm = document.getElementById('planForm');
    if(planForm) {
        planForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you! Your request has been sent. We will contact you soon.");
            planModal.hide();
        });
    }
});
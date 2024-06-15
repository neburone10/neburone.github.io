function switchTab(language) {
    document.getElementById('content-es').classList.remove('content-active');
    document.getElementById('content-en').classList.remove('content-active');
    document.getElementById('tab-es').classList.remove('tab-active');
    document.getElementById('tab-en').classList.remove('tab-active');
    
    if (language === 'es') {
        document.getElementById('content-es').classList.add('content-active');
        document.getElementById('tab-es').classList.add('tab-active');
    } else {
        document.getElementById('content-en').classList.add('content-active');
        document.getElementById('tab-en').classList.add('tab-active');
    }
}

window.onload = function() {
    switchTab('en');
};

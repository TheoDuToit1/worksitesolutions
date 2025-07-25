import React, { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    // Check if scripts are already added
    if (document.getElementById('botpress-script-1') || document.getElementById('botpress-script-2')) {
      return; // Scripts already added
    }

    // Create script elements
    const script1 = document.createElement('script');
    script1.id = 'botpress-script-1';
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
    script1.defer = true;
    script1.crossOrigin = 'anonymous';
    
    const script2 = document.createElement('script');
    script2.id = 'botpress-script-2';
    script2.src = 'https://files.bpcontent.cloud/2025/07/24/17/20250724174128-BXC4Y1FA.js';
    script2.defer = true;
    script2.crossOrigin = 'anonymous';

    // Add error handling
    const handleScriptError = (error) => {
      console.error('Botpress script failed to load:', error);
    };

    script1.onerror = handleScriptError;
    script2.onerror = handleScriptError;
    
    // Append scripts to the document head
    document.head.appendChild(script1);
    document.head.appendChild(script2);
    
    // Cleanup function to remove scripts when component unmounts
    return () => {
      const script1 = document.getElementById('botpress-script-1');
      const script2 = document.getElementById('botpress-script-2');
      
      if (script1) document.head.removeChild(script1);
      if (script2) document.head.removeChild(script2);
      
      // Clean up any botpress webchat elements
      const botpressElements = document.querySelectorAll('[id^="botpress"], [class*="bp-widget"]');
      botpressElements.forEach(el => el.remove());
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default BotpressChat;

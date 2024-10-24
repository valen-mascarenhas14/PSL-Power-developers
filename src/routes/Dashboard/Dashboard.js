import React, { useEffect } from 'react';
const WatsonAssistantPage = () => {
  useEffect(() => {
    // Define Watson Assistant options
    window.watsonAssistantChatOptions = {
      integrationID: "@@@", // The ID of this integration.
      region: "@@@", // The region your integration is hosted in.
      serviceInstanceID: "@@@", // The ID of your service instance.
      onLoad: async (instance) => {
        // Automatically render the chat
        await instance.render();
      }
    };
    // Dynamically inject the Watson Assistant Chat script
    const script = document.createElement('script');
    script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    script.async = true; // Load the script asynchronously
    document.head.appendChild(script);
    // Cleanup the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div>
      <h1>Welcome to the Watson Assistant chatbot</h1>
      <p>The Watson Assistant chatbot will help you with your queries.</p>
    </div>
  );
};
export default WatsonAssistantPage;

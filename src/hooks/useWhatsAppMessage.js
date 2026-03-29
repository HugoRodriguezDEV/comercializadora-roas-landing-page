import { WHATSAPP_NUMBER } from "../constant";


export const useWhatsAppMessage = () => {

    const sendMessage = (message) => {
        if (!message) {
            message = `Hola, necesito información sobre sus productos`;
        }
        
        return getWhatsAppUrl(message);
    }

    const createMessage = (message) => {
        const url = getWhatsAppUrl(message);
        window.open(url, '_blank');
    }

    const getWhatsAppUrl = (message) => {
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        // window.open(url, '_blank');
        return url;
    }

  return {
    sendMessage,
    createMessage
  }
}

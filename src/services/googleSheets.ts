// Webhook integration for lead submission
export interface LeadData {
  name: string;
  phone: string;
  timestamp: string;
  source: string;
}

// Webhook URL for lead submission
const WEBHOOK_URL = 'https://n8n.conglomerate.cc/webhook/save/leads';

// Submit lead data to webhook
export const submitToGoogleSheets = async (data: LeadData): Promise<void> => {
  try {
    const currentTime = new Date().toLocaleString('ru-RU', {
      timeZone: 'Asia/Almaty'
    });

    // Prepare the payload
    const payload = {
      timestamp: currentTime,
      name: data.name.trim(),
      phone: data.phone.trim(),
      source: data.source || 'landing_page',
      status: 'Новая заявка'
    };

    console.log('Submitting lead to webhook:', payload);

    // Submit to webhook
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const result = await response.text();
      console.log('✅ Lead submitted successfully to webhook!');
      console.log('Response:', result);
    } else {
      throw new Error(`Webhook error: ${response.status} ${response.statusText}`);
    }

  } catch (error) {
    console.error('❌ Error submitting to webhook:', error);
    throw error; // Re-throw to let the form handle the error
  }
};

// Initialize function (keeping for compatibility)
export const initGoogleAPI = async (): Promise<void> => {
  console.log('🚀 Webhook integration ready!');
};


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the "EAC Innovation Advisor," the official AI assistant for the "Strengthening Women and Youth Innovation and Entrepreneurship in the EAC Region" project (EASTECO Empowerment Project 2026).

Context for the 2026 Project:
- Primary Goal: To strengthen innovation ecosystems in the 8 EAC Partner States (Burundi, DRC, Kenya, Rwanda, South Sudan, Uganda, Tanzania, Somalia).
- Key Implementation: Handled by EASTECO under the COYWA 2026 Programme.
- Target: 1,600 entrepreneurs (50% women, 50% youth).
- Infrastructure: Establishing strategic hubs in Kigali, Rwanda and Kampala, Uganda.
- Strategic Alignment: SDGs 5 (Gender Equality), 8 (Decent Work), and 10 (Reduced Inequalities), plus AU Agenda 2063.

Your Tone & Style:
1. Be encouraging, visionary, and regionally expert. 
2. Use East African business context (e.g., mention specific partner states).
3. Provide actionable advice on business scaling, tech adoption, and regional policy navigation.
4. Keep responses clear, professional, and formatted with Markdown.
`;

export const getInnovationAdvice = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });
    
    return response.text || "I'm sorry, I couldn't process that request at the moment. Please try asking about the 2026 Innovation Challenge.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes("entity was not found")) {
      return "The Innovation Advisor requires a valid API key. Please ensure your project billing is active.";
    }
    return "The Innovation Advisor is currently refining its knowledge base. Please try again in a moment.";
  }
};

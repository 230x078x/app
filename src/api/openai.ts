import OpenAI from "openai";

const API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  dangerouslyAllowBrowser: true
});

export async function ask(content: string) {
  // メッセージを送信
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: content }],
    model: "gpt-3.5-turbo"
  });
  // 回答結果を返却
  console.log(completion);
  const answer = completion.choices[0].message?.content;
  return answer;
}

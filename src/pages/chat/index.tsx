"use client";

import React, { useState } from "react";
import { ask } from "../../api/openai";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";

export default function index(): JSX.Element {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const response = await ask(prompt);
    const t = response ?? "";
    setResponse(t);
    setLoading(false);
  };

  return (
    <Container>
      <Stack sx={{ mt: 20 }} spacing={3}>
        <Typography fontSize="h4" variant="h4">
          chatbox
        </Typography>
        <TextField
          rows={4}
          className="mt-1 px-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
          placeholder="ここに質問を入れてください"
          value={prompt}
          multiline
          onChange={(e) => setPrompt(e.target.value)}
        ></TextField>
        <Button
          disabled={loading}
          variant="outlined"
          sx={{ width: 1 / 5 }}
          onClick={handleSubmit}
        >
          質問する
        </Button>

        <div className="bg-white px-4 py-5 sm:p-6">
          <h2 className="text-base font-semibold leading-6 text-gray-900">
            質問の答え
          </h2>
          <p className="mt-1 text-sm text-gray-600">{response}</p>
        </div>
      </Stack>
    </Container>
  );
}

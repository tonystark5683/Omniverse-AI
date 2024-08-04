"use client";

import { Crisp } from "crisp-sdk-web";
import React, { useEffect } from "react";

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure("81151575-272e-4839-b8c8-4f167550d982");
  }, []);

  return null;
}

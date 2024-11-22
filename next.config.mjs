/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  /** @type {import('next').NextConfig['webpack']} */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // SVG 파일 대상
      issuer: /\.(js|ts)x?$/, // JS/TS 파일에서 import할 때만 적용
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true, // 추가 설정 가능
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;

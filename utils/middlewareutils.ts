/**
 * 判断用户是否为爬虫
 * @param userAgent 用户ua
 * @returns boolean
 */
export const isBotAgent = (userAgent: string) => {
  const keywords: string[] = [
    "Googlebot",
    "Storebot-Google",
    "Google-InspectionTool",
    "GoogleOther",
    "Google-Extended",
  ];
  return keywords.some((keyword) => userAgent.includes(keyword));
};

/**
 * 判断是否是移动端设备
 * @param userAgent
 */
export const isMoblie = (userAgent: string) => {};

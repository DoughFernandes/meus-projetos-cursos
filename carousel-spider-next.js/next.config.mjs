/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "https://raw.githubusercontent.com/DoughFernandes/Data-Profile/main/spider/spider.json",
        DOMAIN_ORIGIN: "http://localhost:3000"
    },
};

export default nextConfig;

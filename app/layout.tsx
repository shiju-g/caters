import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";

export const metadata = {
  title: "SRIGIRI CATERING",
  description:
    "Srigiri Catering is your one-stop solution for all your special occasions, be it a grand wedding reception, joyous birthday celebrations, auspicious Onam and Vishu festivals, or solemn funeral services.Order your food today with Srigiri Catering and savor the unforgettable flavors!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins ">
        <Header />
        {children}
        <div className="bg-gray-100 py-5 sm:relative  w-full">
          <h6 className="text-center font-semibold">Copyright © 2023 </h6>
        </div>
      </body>
    </html>
  );
}

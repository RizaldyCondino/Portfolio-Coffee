import "./globals.css";
import { Toaster } from "react-hot-toast";



const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      {/* Adding suppressHydrationWarning here protects the body tag 
        from extensions (like dark mode or password managers) that inject 
        attributes before React finishes mounting.
      */}
      <body className="font-poppins antialiased" suppressHydrationWarning>
        {children}
        
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#fff"
            }
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
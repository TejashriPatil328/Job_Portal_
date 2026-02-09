import React from "react"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">

          {/* Left */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">HireHub</h2>
            <p className="text-sm text-gray-600">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-700"
              aria-label="Facebook"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495v-9.294H9.691v-3.622h3.452V8.413c0-3.41 2.083-5.266 5.127-5.266 1.458 0 2.712.108 3.077.157v3.56l-2.113.001c-1.657 0-1.978.788-1.978 1.944v2.55h3.955l-.516 3.622h-3.439V24h6.743C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              className="hover:text-gray-700"
              aria-label="Twitter"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.94 13.94 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.903 4.903 0 01-2.229-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.92 4.92 0 004.6 3.417A9.868 9.868 0 010 19.54 13.94 13.94 0 007.548 22c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              className="hover:text-gray-700"
              aria-label="LinkedIn"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.23 0zM7.06 20.452H3.56V9h3.5v11.452zM5.31 7.433c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03s2.03.91 2.03 2.03c0 1.12-.91 2.03-2.03 2.03zM20.452 20.452h-3.5v-5.569c0-1.328-.027-3.037-1.85-3.037-1.85 0-2.133 1.445-2.133 2.94v5.666h-3.5V9h3.36v1.561h.047c.468-.887 1.61-1.82 3.314-1.82 3.544 0 4.198 2.333 4.198 5.368v6.343z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer

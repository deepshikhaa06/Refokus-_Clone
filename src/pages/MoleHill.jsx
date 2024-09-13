import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import moleImage from './mole.png'; // Ensure you have a mole image in src/

function MoleHill({ isActive, onWhack }) {
  return (
    <div className="relative w-32 h-32 flex items-end justify-center">
      {/* Molehill base */}
      <div className="absolute bottom-0 w-24 h-12 bg-black rounded-full"></div>

      {/* Mole that appears and disappears */}
      <AnimatePresence>
        {isActive && (
          <motion.img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAACUCAMAAADvY+hPAAAAaVBMVEX///8AAADx8fHT09P39/fi4uLt7e3JyclISEhMTEzMzMzf39/a2tr6+vq0tLRgYGBXV1enp6cPDw9nZ2fBwcFubm4hISGDg4MxMTGcnJyurq67u7soKCiJiYl7e3s/Pz8ZGRmTk5M4ODgJoze0AAADq0lEQVR4nO2cCbaiMBBFCaPMiIKKyOD+F/mlab8TIsKrgu6Tu4J7OEXyUilQFIlEIpFIJBKJRCKRLA1fd62gLsKoISzqwHJ1f26p9+iGlhVn8cq5yDRDn1vvFd9ZF6sO3yurYu0s63mrh7DrAT897vCgzi16RXc28UfhlnjjLKFGzK09ULjF3pozG/tZ+JVxQ5jNWthaNLQq7okjbTZjIxkh3JIYsxjrQTpaWYg0mOFlNHYTjBtO7I9a69tAhrFirur1ZOOGNaOxeoIoX+qDbWNUx68XzyRM0v53G18/Nsv+Yu6BykLsGbZyI4IqCxGRS6vf54tPbKhregNXvkjTKhcEykLsKJUzEmUhMjplDbtk3NiTbeMqesm4EVG9h1OTXB9EJe0QKgvhUCjryC37FZviDFCTKgtR45WdnNgZv3b4lC9gyw4d8TxyZSE8sDNFzngGnDtcBmUhXKgzTTZ6pkAqG1RB45E9suVxYFEW4oBTNvGHk25C3DnLGtP9HENswZy5SgNYHOb03txQbFSO5lmcW1BLNKahOAzUyZCvNC7FAXJmVBYCo8wR6W5gwh1VU6MbTEHz5KMrmJxE19XoIkIoqyWr8wqxq5i8ziUiJpE16bqBHL+3U65bvyfdApwDriDaEgcAZ8600YC46JTO0lk6z+ucMa91iGB3ZN5TjgBni7pZ/kiOuFgxPk9VIjkjenb/Yq6Djph8BnPw5mjx30ggzjWrM+bKjfb+9RnMfazO6gy6juVUjjHKCmoCcAgnkLPG6Iy6QDb5EkeKulDR+bpfBWwi4sjmjAh1LS7X9m0DLzW5Vg7UqtHA1EuC9JB+4ennQvq4v2xZnKGPWVE4Dlg5VlkJGJwR3cV7COcur+DnL4/UbY4YXM0XdNzHEt0kBIOMWkWqXJGME9NOcQDHeu6hbHSsaJQVjW6RzskGzenauoRfi1ENulJ+OEG0s5BN8//BpSjpHDsn+gJFU4lklP8eCx3/c9wc4FuO2P2wwseMDrD5n0X5Io2LeMAB0Q94qN6BjR7h78HF9P43xIvcIyai43Hi/qvFpL8VNKTo498Apg2fx8CR8m9Yjw/UZ87P/h8wxlY1/z8h7vDGBL2IcYXrxEm+i3p5Qh6JBmCdhtd1eWLb+PrxjWDYKPoqMBb0LyrfPOz78161P5gLEv6LmRVh2SVelWGRzf0np7fo3jGrd0lU5mlVVWleRsmuzrbeEn6Y1YuumobrNbiGqS5eVyKRSCQSiUQi+b/5AQDqQwCeiS+hAAAAAElFTkSuQmCC"
            alt="Mole"
            className="w-20 h-20 cursor-pointer select-none"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.3 }}
            onClick={onWhack}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default MoleHill;

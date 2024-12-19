function FindProxyForURL(url, host) {
    // Use proxy for all HTTP requests
    if (url.startsWith("http://")) {
        return "PROXY proxy.example.com:8080";
    }

    // Use direct connection for all other requests
    return "DIRECT";
}

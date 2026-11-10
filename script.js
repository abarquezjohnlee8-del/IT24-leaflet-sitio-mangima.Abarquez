
const mangimaLat = 8.3812;
const mangimaLng = 124.7215;
const zoomLevel = 13;

// Initialize map
const map = L.map('map').setView([mangimaLat, mangimaLng], zoomLevel);

// Add base map tiles (OpenStreetMap — free & reliable)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);


const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1157/1157005.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Add marker
const marker = L.marker([mangimaLat, mangimaLng], { icon: customIcon }).addTo(map);

// Popup info
marker.bindPopup(`
    <div style="min-width: 220px;">
        <h4 style="color:#2e7d32; margin:0 0 8px 0;">🌿 Sitio Mangima</h4>
        <p style="margin:4px 0;"><strong>Barangay:</strong> Dalirig</p>
        <p style="margin:4px 0;"><strong>Municipality:</strong> Manolo Fortich</p>
        <p style="margin:4px 0;"><strong>Province:</strong> Bukidnon</p>
        <p style="margin:8px 0 0 0; font-size:0.9em; color:#666;">Highlands of Northern Mindanao</p>
    </div>
`).openPopup();

// Center button function
document.getElementById('centerBtn').addEventListener('click', () => {
    map.flyTo([mangimaLat, mangimaLng], zoomLevel, { duration: 1.5 });
    marker.openPopup();
});

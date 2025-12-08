// frontend/src/renderer/src/api.js

const API_BASE_URL = 'http://localhost:4000'  // buat sementara DI-HARDCODE aja

export async function getTestFromBackend() {
    const url = `${API_BASE_URL}/api/test-react`
    console.log('➡️ Fetch ke:', url)

    try {
        const res = await fetch(url)

        console.log('⬅️ Response status:', res.status, res.statusText)

        if (!res.ok) {
            const text = await res.text()
            throw new Error(`HTTP ${res.status} ${res.statusText} — ${text}`)
        }

        const data = await res.json()
        console.log('✅ Data dari backend:', data)
        return data
    } catch (err) {
        console.error('❌ Fetch ke backend gagal:', err)
        throw err
    }
}

# AI Araştırma Asistanı

Basit bir AI araştırma asistanı web sitesi. Soru gönderir, Netlify fonksiyonu içindeki kendi arama ve özetleme motoru ile cevap üretir.

## Nasıl kullanılır

1. Bu klasörü Netlify üzerinde bir site olarak yayınlayın.
2. Hiçbir API anahtarı girmenize gerek yok.

## Özellikler

- Yerel fonksiyon DuckDuckGo üzerinde sorgu yapar.
- Çıkan ilk kaynakları tek tek ziyaret eder.
- Her bir kaynaktan metin çıkarır ve yerel özetleme algoritması ile bir rapor üretir.

## Netlify deploy

1. `git init` ile bir repo oluşturun veya mevcut repoya ekleyin.
2. Netlify hesabınızdan yeni bir site oluşturun.
3. Build ayarlarında `Build command` kısmını boş bırakın veya `npm run build` yazmayın.
4. Publish directory olarak `.` seçin.
5. `netlify.toml` dosyası zaten fonksiyon dizinini `functions` olarak ayarlıyor.

## Geliştirme

Bu proje şu anda kendi özetleme motorunu kullanarak bir başlangıç oluşturur. İleride ekleyebileceğiniz iyileştirmeler:

- Daha fazla arama motoru kaynağı ekleme
- Kaynakların ön izlemelerini kullanıcıya gösterme
- Cevaplardaki bilgi kalitesini artırmak için metin sınıflandırması ve ağırlıklı özetleme
- Kullanıcı tanımlı kaynak listesi veya hedef web siteleri

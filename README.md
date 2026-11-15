# Strona MOS Różanystok

Strona Salezjańskiego Domu Młodzieżowego w Różanymstoku.

- **Strona** - Astro, budowana do statycznych plików HTML/CSS/JS (bez Node.js na serwerze).
- **Treści** - WordPress używany wyłącznie jako panel do edycji (strony, aktualności, zdjęcia, pliki).
  Strona pobiera je przez REST API **podczas budowania**, nie przy każdym wejściu odwiedzającego.

| Co | Gdzie |
|---|---|
| Strona | https://mos.tiu.pl/ -> `public_html/` na hostingu |
| Panel WordPressa | https://mos.tiu.pl/cms/wp-admin -> `public_html/cms/` |
| Baza danych WordPressa | MySQL na hostingu (dane tylko w `public_html/cms/wp-config.php`) |

`mos.tiu.pl` to adres tymczasowy. Docelowa domena: `mosrozanystok.pl` (patrz "Zmiana domeny").

## Ważne zasady

- **Zdjęcia i pliki nie są kopiowane do strony.** Strona wyświetla je bezpośrednio z
  `https://mos.tiu.pl/cms/wp-content/uploads/...`. WordPress musi działać, żeby były widoczne.
- **Budowanie zawsze na produkcyjnym WordPressie** (`WP_URL=https://mos.tiu.pl/cms`). Build na
  lokalnym WP dałby stronę z obrazkami wskazującymi na `osrodek.local`, niewidocznymi dla nikogo.
- **Zmiana treści w WP nie pojawia się na stronie sama.** Trzeba przebudować stronę i wgrać ją
  na serwer (patrz "Aktualizacja strony").
- Linki do innych podstron wpisuj w edytorze WP jako ścieżki strony, np. `/rekrutacja`, a nie pełne
  adresy WordPressa (`.../cms/...`). Ukośnik na końcu (`/rekrutacja/`) dopisuje się sam przy budowaniu.
- Adresy podstron są po polsku: `/o-nas/`, `/kontakt/`, `/galeria/`, `/aktualnosci/`. Stare
  angielskie (`/about-us`, `/contact`, `/gallery`, `/news/...`) przekierowuje `public/.htaccess`.
- Strony prawne (Polityka prywatności, Ochrona danych (RODO), Deklaracja dostępności) powstają
  i pojawiają się w stopce oraz na `/dokumenty/` dopiero, gdy w WP istnieje opublikowana strona
  o slugu `polityka-prywatnosci`, `ochrona-danych` lub `deklaracja-dostepnosci` z treścią.
  Wystarczy ją utworzyć i przebudować serwis. Lista: `legalPages` w `src/data/site.js`.
- Część treści jest w kodzie, nie w WP: kafelki (`src/data/sections.js`), dane kontaktowe
  i dokumenty (`src/data/site.js`), rekrutacja i metody pracy (`src/data/content.js`).
- Hasła nie trafiają do repozytorium. Frontend nie potrzebuje żadnych haseł do WordPressa.

## Praca lokalna

Wymagany Node.js 22.23.4 lub nowszy.

```sh
npm install
cp .env.example .env    # i uzupełnij wartości (opis w pliku)
npm run dev             # podgląd na http://localhost:4321
```

W trybie `dev` błędy połączenia z WP są tylko ostrzeżeniem (strona pokazuje treść zastępczą).
Przy `npm run build` błąd połączenia **przerywa budowanie** - to celowe, żeby awaria WP nie
skończyła się wgraniem pustej strony.

### Zmienne w `.env`

| Zmienna | Wartość produkcyjna | Znaczenie |
|---|---|---|
| `WP_URL` | `https://mos.tiu.pl/cms` | skąd pobierać treści |
| `SITE_URL` | `https://mos.tiu.pl` | adres strony: mapa strony, canonical, podgląd linków |
| `NOINDEX` | `true` (adres tymczasowy) | `true` = strona nie trafia do Google |

## Aktualizacja strony (po zmianach w WP lub w kodzie)

> **Nie używaj w WinSCP polecenia "Synchronizuj" z usuwaniem plików.** WordPress leży w
> `public_html/cms/`, a folderu `cms` nie ma w `dist`, więc synchronizacja oznacza go do
> usunięcia. Maska wykluczeń okazała się zawodna (sprawdzone w praktyce). Usunięcie `cms`
> to utrata WordPressa ze wszystkimi zdjęciami.

1. `npm run build` - wynik w folderze `dist/`.
2. Opcjonalnie `npm run preview` i sprawdzenie na http://localhost:4321.
3. WinSCP (protokół **SFTP**, port 22) -> lewy panel: `D:\Projekty\osrodek\dist`,
   prawy panel: `public_html`.
4. W lewym panelu włącz pokazywanie ukrytych plików (**Ctrl+Alt+H**), żeby skopiował się
   też `.htaccess`.
5. Zaznacz wszystko w lewym panelu (**Ctrl+A**), przeciągnij do prawego i przy pytaniu
   o nadpisanie wybierz **"Tak dla wszystkich"**. Kopiowanie tylko dodaje i zastępuje
   pliki - niczego nie usuwa, więc `cms` jest bezpieczny.
6. **Tylko jeśli w WP usunięto wpis albo stronę albo zmieniono jej adres (slug):** usuń na
   serwerze ręcznie jej stary folder, np. `public_html/aktualnosci/stary-adres-wpisu/`. Nazwy
   folderów to adresy podstron. Bez tego stara wersja nadal będzie dostępna pod starym
   adresem (choć zniknie z list i menu). Nigdy nie usuwaj `cms`.
7. Sprawdź stronę w przeglądarce (najlepiej w oknie prywatnym).

## WordPress na serwerze

- `public_html/cms/wp-config.php` - dane bazy, klucze, ustawienia bezpieczeństwa. **Tylko na
  serwerze, nigdy w repozytorium.**
- `public_html/cms/.htaccess` - tworzy go WordPress (Ustawienia -> Bezpośrednie odnośniki).
  Nad linią `# BEGIN WordPress` są podniesione limity PHP (`memory_limit`, `max_execution_time`,
  `max_input_vars`).
- `public_html/cms/wp-content/mu-plugins/mos-headless.php` - kopia pliku z
  [wordpress/mu-plugins/](wordpress/mu-plugins/). Przekierowuje publiczną część WP na stronę
  główną, ukrywa listę użytkowników w API, wyłącza XML-RPC. Po zmianie pliku w repozytorium
  wgraj go ponownie.
- Kopie zapasowe plików i bazy robi hosting codziennie (przywracanie w panelu hostingu).
  Przed większymi zmianami (aktualizacje, zmiana domeny) zrób własną: eksport bazy w phpMyAdmin
  i pobranie `wp-content`.

## Zmiana domeny na mosrozanystok.pl

1. Administrator podpina domenę i certyfikat SSL.
2. Kopia zapasowa bazy i `wp-content`.
3. W bazie WP zamiana `https://mos.tiu.pl/cms` -> `https://mosrozanystok.pl/cms` narzędziem, które
   obsługuje dane serializowane (np. wtyczka Better Search Replace). **Nie** zwykłym `REPLACE` w SQL.
4. W `wp-config.php`: `WP_HOME` i `WP_SITEURL` na nowy adres.
5. W `.env`: `WP_URL=https://mosrozanystok.pl/cms`, `SITE_URL=https://mosrozanystok.pl`,
   `NOINDEX=false`. Następnie build i wgranie strony.
6. Przekierowanie 301 z `mos.tiu.pl` na nową domenę (`.htaccess` albo panel hostingu).
7. W WP: Ustawienia -> Czytanie -> odznacz "Proś wyszukiwarki o nieindeksowanie".

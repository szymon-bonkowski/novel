const STORY = {
    start: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Narrator",
        text: "Ruiny starozytnej Przekletej Twierdzy tonely w mroku nocy. Jedynie wyladowania burzy rozswietlaly niebo, rzucajac blady blask na zniszczone kamienne mury. Jestes mlodym poszukiwaczem przygod, ktory przybyl tu, aby odnalezc legendarny Smoczy Pakt. Nagle przed Toba pojawia sie Aria, tajemnicza czarodziejka.",
        image: "bg_twierdza.png",
        effects: { wiedza: 0, odwaga: 0, relacja: 0, moc: 0, resetInventory: true },
        choices: [
            { text: "Popros Arie o pomoc w poszukiwaniach", next: "aria_spotkanie" },
            { text: "Przeszukaj samodzielnie dziedziniec", next: "samodzielne_poszukiwanie" },
            { text: "Podejdz do wielkiej bramy i zbadaj runy", next: "brama_obserwacja" }
        ]
    },
    aria_spotkanie: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Aria",
        text: "Chetnie pomoge! Ale powiedz, czy naprawde jestes gotowy na to, co tu kryjemy? Mowi sie, ze gleboko pod nami, w Smoczej Jaskini, spi pradawna bestia chroniaca zrodla magii twierdzy. Aby tam dotrzec, musimy ominac zabezpieczenia.",
        image: "bg_twierdza.png",
        effects: { wiedza: 1, relacja: 1 },
        choices: [
            { text: "Zapytaj o szczegoly legendy", next: "legenda_szczegoly" },
            { text: "Zaproponuj wspolne badanie barier", next: "wspolna_nauka" },
            { text: "Przeszukaj stary kamienny schowek za nia", next: "skrzynia_tajemna" }
        ]
    },
    samodzielne_poszukiwanie: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Narrator",
        text: "Kierujesz sie na zniszczony dziedziniec. Powietrze pachnie ozonem i magia. Na wysokim gzymsie, pod rzezba smoczej glowy, dostrzegasz cos, co blyszczy metalicznym blaskiem.",
        image: "bg_twierdza.png",
        effects: { odwaga: 1 },
        choices: [
            { text: "Wespnij sie po kamieniach na gzyms", next: "znalezienie_klucza" },
            { text: "Przeszukaj stary regal z archiwami", next: "szukanie_ksiag" },
            { text: "Zawolaj Arie, by zobaczyla to znalezisko", next: "aria_spotkanie" }
        ]
    },
    brama_obserwacja: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Narrator",
        text: "Stoisz przed wielka, zamknieta brama twierdzy. Runy obronne pulsuja slabo. Aria podchodzi do Ciebie. 'Ta bariera ma ponad tysiac lat. Zwykla sila jej nie pokonasz.' - mowi cicho.",
        image: "bg_twierdza.png",
        effects: { relacja: 1 },
        choices: [
            { text: "Porozmawiaj o niebezpieczenstwach burzy", next: "wspolna_nauka" },
            { text: "Zapytaj o wejscia do podziemi", next: "legenda_szczegoly" },
            { text: "Zaproponuj spacer wzdluz zewnetrznych murow", next: "spacer_mury" }
        ]
    },
    legenda_szczegoly: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Aria",
        text: "Aria szepcze: 'Pod nami rozposciera sie labirynt lochow prowadzacy do jaskini. Wejscie kryje sie za ta brama. Potrzebujemy Runy Ognia lub wyjatkowo silnego zaklecia deszyfrujacego do magicznej bariery.'",
        image: "bg_twierdza.png",
        effects: { wiedza: 2 },
        choices: [
            { text: "Zaproponuj natychmiastowe otwarcie bramy", next: "poszukiwanie_portalu" },
            { text: "Najpierw zbadajmy ksiegi magii obronnej", next: "wspolna_nauka" },
            { text: "Poszukaj ukrytych nisz w murze", next: "skrzynia_tajemna" }
        ]
    },
    wspolna_nauka: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Narrator",
        text: "Spedzacie czas na badaniu run. Aria wyjasnia zasady starozytnej magii. Twoja wiedza rosnie, a miedzy Wami rodzi sie zaufanie.",
        image: "bg_twierdza.png",
        effects: { wiedza: 2, relacja: 1 },
        choices: [
            { text: "Podejdzcie do zakletej bramy", next: "poszukiwanie_portalu" },
            { text: "Poszukaj wskazowek w zniszczonym archiwum", next: "szukanie_ksiag" },
            { text: "Zrezygnuj z wyprawy i wroc do miasta", next: "powrot_do_domu" }
        ]
    },
    spacer_mury: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Narrator",
        text: "Spacerujecie wzdluz murow. Nagle z wnetrza zardzewialej szafy strazniczej dobiega cichy, rytmiczny szept, jakby uwiezione zaklecie.",
        image: "bg_twierdza.png",
        effects: { odwaga: 1 },
        choices: [
            { text: "Zbadaj ostroznie zardzewiala szafe", next: "szafa_kartotekowa" },
            { text: "Wycofaj sie bezpiecznie do Arii", next: "aria_spotkanie" }
        ]
    },
    skrzynia_tajemna: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Narrator",
        text: "Otwierasz ukryta w murze skrzynie. W srodku, na aksamitnej poduszce, spoczywa Runa Ognia, pokryta cieplymi, czerwonymi znakami.",
        image: "bg_twierdza.png",
        effects: {},
        choices: [
            { text: "Zabierz Rune Ognia", next: "znalezienie_klucza" },
            { text: "Zostaw ja i wroc do rozmowy z Aria", next: "legenda_szczegoly" }
        ]
    },
    szafa_kartotekowa: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Narrator",
        text: "Otwierasz szafe straznicza. Szepty cichna, a Ty znajdujesz dwa artefakty: Berlo Swiatla oraz stary, zapisany pergamin z planem lochow.",
        image: "bg_twierdza.png",
        effects: { wiedza: 2 },
        choices: [
            { text: "Zabierz Berlo Swiatla i pokaz je Arii", next: "prezentacja_piora", item: "pioro" },
            { text: "Przeanalizuj stary pergamin z planem", next: "analiza_mapy", item: "mapa" }
        ]
    },
    prezentacja_piora: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Aria",
        text: "Aria patrzy z zaciekawieniem: 'To Berlo Swiatla! Pozwala neutralizowac starozytne bariery bez wywolywania eksplozji. Moze nam bardzo pomoc przy bramie!'",
        image: "bg_twierdza.png",
        effects: { wiedza: 1, relacja: 2 },
        choices: [
            { text: "Uzyjcie berla, by zlokalizowac zrodlo", next: "poszukiwanie_portalu" },
            { text: "Wroc do stolu i kontynuuj nauke", next: "wspolna_nauka" }
        ]
    },
    analiza_mapy: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Narrator",
        text: "Analizujecie stary pergamin. Pokazuje on tajne przejscie przez Ogrod oraz haslo dezaktywujace bariery bramy.",
        image: "bg_twierdza.png",
        effects: { wiedza: 3 },
        choices: [
            { text: "Idzcie natychmiast do glownych wrot", next: "poszukiwanie_portalu" }
        ]
    },
    znalezienie_klucza: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Narrator",
        text: "Podnosisz Rune Ognia. Czujesz, jak bije od niej delikatne cieplo. Aria podchodzi, wyczuwajac energie runy.",
        image: "bg_twierdza.png",
        effects: { odwaga: 1 },
        choices: [
            { text: "Pokaz rune Arii i zapytaj o jej znaczenie", next: "legenda_szczegoly", item: "klucz" },
            { text: "Schowaj ja i zaproponuj zbadanie wrot", next: "poszukiwanie_portalu", item: "klucz" }
        ]
    },
    szukanie_ksiag: {
        chapter: "Rozdzial 1: Twierdza",
        speaker: "Narrator",
        text: "Przeszukujesz zrujnowana biblioteke twierdzy. Pod obluzowana plyta podlogowa znajdujesz Mroczny Grimuar pelen zakazanych formul.",
        image: "bg_twierdza.png",
        effects: { wiedza: 2, odwaga: 1 },
        choices: [
            { text: "Zabierz grimuar i szukaj dalej", next: "poszukiwanie_portalu", item: "ksiega" },
            { text: "Zostaw to ciemne miejsce i wroc", next: "powrot_do_domu" }
        ]
    },
    poszukiwanie_portalu: {
        chapter: "Rozdzial 2: Odkrycie",
        speaker: "Aria",
        text: "Aria wskazuje na zamek: 'Musimy odblokowac ten mechanizm. Runa Ognia, sila czy odpowiednie zaklecie?'",
        image: "bg_twierdza.png",
        effects: {},
        choices: [
            { text: "Wloz Rune Ognia do zamka", next: "otwarcie_kluczem", requires: { item: "klucz" } },
            { text: "Sprobuj rozszyfrowac znaki runiczne", next: "deszyfrowanie_run", requires: { stat: "wiedza", min: 4 } },
            { text: "Uzyj Berla Swiatla na barierze", next: "uzycie_piora", requires: { item: "pioro" } },
            { text: "Sprobuj wywazyc wrota sila", next: "proba_sily" }
        ]
    },
    otwarcie_kluczem: {
        chapter: "Rozdzial 2: Odkrycie",
        speaker: "Narrator",
        text: "Wkladasz Rune Ognia w zamek. Brama rozsuwa sie ze zgrzytem, odslaniajac wilgotne schody prowadzace w dol, do ciemnych lochow.",
        image: "bg_loch.png",
        effects: {},
        choices: [
            { text: "Zejdzcie razem w glebiny lochow", next: "korytarz_podziemny" },
            { text: "Zamknij wrota i wracaj do domu", next: "powrot_do_domu" }
        ]
    },
    deszyfrowanie_run: {
        chapter: "Rozdzial 2: Odkrycie",
        speaker: "Narrator",
        text: "Dzieki zdobytej wiedzy recytujesz starozytna formule. Bariera opada z cichym szumem, a wrota otwieraja sie przed Wami.",
        image: "bg_loch.png",
        effects: { relacja: 2, wiedza: 1 },
        choices: [
            { text: "Zejdzcie podziemiach", next: "korytarz_podziemny" }
        ]
    },
    uzycie_piora: {
        chapter: "Rozdzial 2: Odkrycie",
        speaker: "Narrator",
        text: "Berlo Swiatla neutralizuje energie bramy. Runy gasna jedna po drugiej, a brama otwiera sie bezszelestnie.",
        image: "bg_loch.png",
        effects: { wiedza: 1 },
        choices: [
            { text: "Wejdzcie do odblokowanych lochow", next: "korytarz_podziemny" }
        ]
    },
    proba_sily: {
        chapter: "Rozdzial 2: Odkrycie",
        speaker: "Narrator",
        text: "Uderzasz w mechanizm bramy. Runy natychmiast rozblyskaja wsciekla czerwienia! Impuls odrzuca Cie, a straznicze zaklecia aktywuja alarm!",
        image: "bg_twierdza.png",
        effects: { odwaga: 1 },
        choices: [
            { text: "Sprobuj uciekac przed czarami", next: "ending_cursed" },
            { text: "Zaslon Arie wlasnym cialem", next: "ending_sacrifice", requires: { stat: "relacja", min: 3 } },
            { text: "Rzuc zaklecie teleportacji w panice", next: "proba_teleportacji" }
        ]
    },
    proba_teleportacji: {
        chapter: "Rozdzial 2: Odkrycie",
        speaker: "Narrator",
        text: "Rzucasz zaklecie teleportacji w panice. Przestrzen zaczyna sie znieksztalcac pod wplywem zaklocen...",
        image: "bg_ending_bad.png",
        effects: {},
        choices: [
            { text: "Poddaj sie magii", next: "ending_consumed" }
        ]
    },
    korytarz_podziemny: {
        chapter: "Rozdzial 3: Podziemia",
        speaker: "Narrator",
        text: "Schodzicie do mrocznych lochow. Zielone pochodnie swieca na scianach. Droga sie rozwidla: lewa sciezka pachnie chlodem i magia, prawa bije cieplem alchemicznych piecow.",
        image: "bg_loch.png",
        effects: { odwaga: 1 },
        choices: [
            { text: "Idz w lewo, w strone magicznej aury", next: "biblioteka_zakazana_podziemna" },
            { text: "Idz w prawo, w kierunku ciepla", next: "laboratorium" },
            { text: "Zbadaj rzezby na scianie lochu", next: "runy_korytarzowe" }
        ]
    },
    biblioteka_zakazana_podziemna: {
        chapter: "Rozdzial 3: Podziemia",
        speaker: "Narrator",
        text: "Docieracie do ukrytej komnaty z dawnymi zapiskami. Na stole lezy Kronika Smoka, zawierajaca sekrety rytualu paktu.",
        image: "bg_loch.png",
        effects: { wiedza: 3 },
        choices: [
            { text: "Przestudiuj kronike na miejscu", next: "droga_do_komnaty" },
            { text: "Zabierz ja ze soba", next: "stroz_duchowy" }
        ]
    },
    laboratorium: {
        chapter: "Rozdzial 3: Podziemia",
        speaker: "Narrator",
        text: "Wchodzicie do dawnego laboratorium. Fiolki z eliksirami wciaz stoja na polkach. Na szafce widzisz flakonik z Eliksirem Many.",
        image: "bg_loch.png",
        effects: { wiedza: 1 },
        choices: [
            { text: "Wypij Eliksir Many", next: "eliksir_mocy", item: "eliksir" },
            { text: "Zbadaj zapiski alchemiczne", next: "diagramy_alchemiczne" },
            { text: "Idz dalej korytarzem", next: "droga_do_komnaty" }
        ]
    },
    runy_korytarzowe: {
        chapter: "Rozdzial 3: Podziemia",
        speaker: "Aria",
        text: "Aria odczytuje znaki na scianie: 'Te runy wskazuja ukryte przejscie do Ogrodu!'. Naciska kamien, otwierajac tajne przejscie w gore.",
        image: "bg_loch.png",
        effects: { wiedza: 2, relacja: 1 },
        choices: [
            { text: "Wejdz do tajnego przejscia w gore", next: "wieza_schody" },
            { text: "Wybierz korytarz do laboratorium", next: "laboratorium" }
        ]
    },
    eliksir_mocy: {
        chapter: "Rozdzial 3: Podziemia",
        speaker: "Narrator",
        text: "Wypijasz Eliksir Many. Twoja magiczna moc gwaltownie rosnie, wypelniajac Twoje cialo nowa energia.",
        image: "bg_loch.png",
        effects: { moc: 2 },
        choices: [
            { text: "Przejdz dalej w glab podziemi", next: "droga_do_komnaty" },
            { text: "Zbadaj stare diagramy w pokoju", next: "diagramy_alchemiczne" }
        ]
    },
    diagramy_alchemiczne: {
        chapter: "Rozdzial 3: Podziemia",
        speaker: "Narrator",
        text: "Zapiski na scianach pokazuja plan podziemi. Istnieje bezpieczna sciezka przez Ogrod oraz schowek z Pierscieniem Ochronnym.",
        image: "bg_loch.png",
        effects: { wiedza: 2 },
        choices: [
            { text: "Idz prosto do jaskini smoka", next: "droga_do_komnaty" },
            { text: "Idz sciezka do magicznego Ogrodu", next: "wejscie_lasu" },
            { text: "Odszukaj Pierscien Ochronny", next: "amulet_ochronny", item: "amulet" }
        ]
    },
    amulet_ochronny: {
        chapter: "Rozdzial 3: Podziemia",
        speaker: "Narrator",
        text: "Znajdujesz zloty Pierscien Ochronny. Czujesz, ze otacza Cie niewidzialna tarcza chroniaca przed uderzeniami magii.",
        image: "bg_loch.png",
        effects: { moc: 1 },
        choices: [
            { text: "Wroc na glowna sciezke do jaskini", next: "droga_do_komnaty" }
        ]
    },
    droga_do_komnaty: {
        chapter: "Rozdzial 4: Wgleb",
        speaker: "Narrator",
        text: "Korytarz prowadzi Was glebiej. Nagle na drodze staje widmowy Straznik - duch dawnego maga, ktory pilnuje wejscia.",
        image: "bg_loch.png",
        effects: {},
        choices: [
            { text: "Porozmawiaj pokojowo z duchem", next: "dialog_straznik" },
            { text: "Pokonaj go czarem", next: "walka_straznik", requires: { stat: "moc", min: 2 } },
            { text: "Uzyj Mrocznego Grimuaru, by go rozproszyc", next: "odczyn_ksiega", requires: { item: "ksiega" } }
        ]
    },
    dialog_straznik: {
        chapter: "Rozdzial 4: Wgleb",
        speaker: "Straznik",
        text: "Straznik pyta: 'Dlaczego zaklocacie spokoj tego miejsca? Czego szukacie w Smoczej Jaskini?'",
        image: "bg_loch.png",
        effects: { wiedza: 1 },
        choices: [
            { text: "Szukam mocy, by chronic innych", next: "straznik_akceptacja" },
            { text: "Szukam ostatecznej potegi", next: "straznik_ostrzezenie" },
            { text: "Chce po prostu pojac prawa magii", next: "straznik_akceptacja" }
        ]
    },
    straznik_akceptacja: {
        chapter: "Rozdzial 4: Wgleb",
        speaker: "Straznik",
        text: "Twoje slowa przekonuja ducha. 'Idzcie wiec' - mowi i rozplywa sie w powietrzu. 'Ale badzcie ostrozni, smok nie lubi gosci.'",
        image: "bg_loch.png",
        effects: { odwaga: 1 },
        choices: [
            { text: "Wejdz do Smoczej Jaskini", next: "komnata_krysztalu" }
        ]
    },
    straznik_ostrzezenie: {
        chapter: "Rozdzial 4: Wgleb",
        speaker: "Straznik",
        text: "Straznik przepuszcza Was, ale ostrzega przed chciwoscia, ktora zgubila poprzednikow. Aria patrzy na Ciebie z niepokojem.",
        image: "bg_loch.png",
        effects: { relacja: -1 },
        choices: [
            { text: "Idz dalej pewnym krokiem", next: "komnata_krysztalu" },
            { text: "Przemysl to i idz ostroznie", next: "komnata_krysztalu" }
        ]
    },
    walka_straznik: {
        chapter: "Rozdzial 4: Wgleb",
        speaker: "Narrator",
        text: "Uzywasz swojej magicznej mocy, by rozproszyc ducha. Droga stoi otworem, ale czujesz zmeczenie starciem.",
        image: "bg_loch.png",
        effects: { moc: 1, odwaga: 2 },
        choices: [
            { text: "Idz do jaskini smoka", next: "komnata_krysztalu" }
        ]
    },
    odczyn_ksiega: {
        chapter: "Rozdzial 4: Wgleb",
        speaker: "Narrator",
        text: "Uzywasz Mrocznego Grimuaru, by odczytac zaklecie uwolnienia. Duch dziekuje za uwolnienie z wiecznej warty i znika.",
        image: "bg_loch.png",
        effects: { wiedza: 2, relacja: 1 },
        choices: [
            { text: "Przejdz do Smoczej Jaskini", next: "komnata_krysztalu" }
        ]
    },
    wieza_schody: {
        chapter: "Rozdzial 4: Ogrod",
        speaker: "Narrator",
        text: "Przechodzicie tajnym przejsciem do Ogrodu. Powietrze staje sie rzeskie, a zmysly koi widok swiecacych roslin.",
        image: "bg_ogrod.png",
        effects: { wiedza: 2, odwaga: 1 },
        choices: [
            { text: "Zbadaj kamienny oltar w centrum", next: "obserwacje_gwiezdne" },
            { text: "Przeszukaj swiecace mapy wokolo", next: "mapy_gwiezdne" }
        ]
    },
    obserwacje_gwiezdne: {
        chapter: "Rozdzial 4: Ogrod",
        speaker: "Aria",
        text: "Na kamiennym oltarzu w ogrodu widzisz konstelacje wskazujace na szczyt magicznej aktywnosci smoka dzisiejszej nocy.",
        image: "bg_ogrod.png",
        effects: { wiedza: 2, relacja: 1 },
        choices: [
            { text: "Pospiesz sie do jaskini", next: "komnata_krysztalu" },
            { text: "Sprawdz najpierw plan na oltarzu", next: "mapy_gwiezdne" }
        ]
    },
    mapy_gwiezdne: {
        chapter: "Rozdzial 4: Ogrod",
        speaker: "Narrator",
        text: "Mapy wyryte na oltarzu ujawniaja sekrety oslabienia barier smoka oraz bezpieczna droge do jego jaskini.",
        image: "bg_ogrod.png",
        effects: { wiedza: 3 },
        choices: [
            { text: "Idz do jaskini smoka", next: "komnata_krysztalu" },
            { text: "Idz glebiej w dzikie czesci Ogrodu", next: "wejscie_lasu" }
        ]
    },
    wejscie_lasu: {
        chapter: "Rozdzial 5: Ogrod Cieni",
        speaker: "Narrator",
        text: "Wkraczacie w najglebsza czesc Ogrodu. Swiecace grzyby rozswietlaja sciezke prowadzaca do Zrodla Zycia.",
        image: "bg_ogrod.png",
        effects: { odwaga: 2 },
        choices: [
            { text: "Podejdz do oltarza pod drzewem", next: "altar_leany" },
            { text: "Idz wzdluz magicznego strumienia", next: "zrodlo_mocy" },
            { text: "Zawroc do jaskini smoka", next: "komnata_krysztalu" }
        ]
    },
    altar_leany: {
        chapter: "Rozdzial 5: Ogrod Cieni",
        speaker: "Narrator",
        text: "Stajecie przed pradawnym Drzewem Zycia, ktorego korzenie pulsuja tecza barw.",
        image: "bg_ogrod.png",
        effects: {},
        choices: [
            { text: "Dotknij pulsujacych korzeni", next: "proroctwo" },
            { text: "Idz szukac Zrodla Mocy", next: "zrodlo_mocy" }
        ]
    },
    proroctwo: {
        chapter: "Rozdzial 5: Ogrod Cieni",
        speaker: "Narrator",
        text: "Dotykasz drzewa i widzisz wizje przyszlosci: Ty i Aria rzadzicie moca smoka, wprowadzajac pokoj w krainie.",
        image: "bg_ogrod.png",
        effects: { wiedza: 3, moc: 1 },
        choices: [
            { text: "Idz z ta wiedza do jaskini smoka", next: "komnata_krysztalu" }
        ]
    },
    zrodlo_mocy: {
        chapter: "Rozdzial 5: Ogrod Cieni",
        speaker: "Narrator",
        text: "Strumien czystej magii bije ze zrodla. Mozecie wchlonac te energie, ale to zmieni Was na zawsze.",
        image: "bg_ogrod.png",
        effects: { relacja: 2 },
        choices: [
            { text: "Wchlonijcie moc wspolnie", next: "ending_together" },
            { text: "Wchlon ja sam dla siebie", next: "ending_consumed" },
            { text: "Wroc do jaskini - to zbyt grozne", next: "komnata_krysztalu" }
        ]
    },
    komnata_krysztalu: {
        chapter: "Rozdzial 6: Jaskinia",
        speaker: "Narrator",
        text: "Wkraczacie do Smoczej Jaskini. Wielki czerwony smok budzi sie, a jego oczy rozbyskaja ogniem. To chwila prawdy.",
        image: "bg_jaskinia.png",
        effects: {},
        choices: [
            { text: "Polacz sie z jego umyslem", next: "rytuala_polaczenie" },
            { text: "Pozwol Arii przejac pakt", next: "sakura_przejmuje" },
            { text: "Zniszcz starozytna obroze smoka", next: "zniszczenie_krysztalu", requires: { stat: "odwaga", min: 4 } },
            { text: "Uciekaj z jaskini", next: "ending_mundane" }
        ]
    },
    rytuala_polaczenie: {
        chapter: "Rozdzial 6: Jaskinia",
        speaker: "Narrator",
        text: "Dotykasz smoka, probujac polaczyc Wasze umysly w rytuale paktu.",
        image: "bg_jaskinia.png",
        effects: { moc: 5 },
        choices: [
            { text: "Opanuj wole smoka swoim sprytem", next: "ending_hero", requires: { stat: "wiedza", min: 6 } },
            { text: "Poddaj sie zywiolowi ognia", next: "ending_consumed" },
            { text: "Podziel sie paktem z Aria", next: "ending_together", requires: { stat: "relacja", min: 4 } }
        ]
    },
    sakura_przejmuje: {
        chapter: "Rozdzial 6: Jaskinia",
        speaker: "Aria",
        text: "Decydujesz, ze to Aria powinna zawrzec pakt. Dziewczyna laczy sie ze smokiem, zyskujac niespotykana potege.",
        image: "bg_jaskinia.png",
        effects: { relacja: 3 },
        choices: [
            { text: "Zostan jej wiernym obronca", next: "ending_ascension" },
            { text: "Popros o podzial smoczej magii", next: "ending_together" }
        ]
    },
    zniszczenie_krysztalu: {
        chapter: "Rozdzial 6: Jaskinia",
        speaker: "Narrator",
        text: "Niszczysz magiczny obroze smoka, ktora go wiezila. Uwolniona bestia ryczy glosno, niszczac czesc jaskini.",
        image: "bg_ending_bad.png",
        effects: { odwaga: 3 },
        choices: [
            { text: "Zaakceptuj to, co przyniesie los", next: "ending_scholar" }
        ]
    },
    stroz_duchowy: {
        chapter: "Rozdzial 3: Podziemia",
        speaker: "Narrator",
        text: "Duchowy straznik wkracza w gniewie, gdy probujesz zabrac kronike. Musisz walczyc lub rozmawiac.",
        image: "bg_loch.png",
        effects: { odwaga: 1 },
        choices: [
            { text: "Wytlumacz sie i przepros", next: "dialog_straznik" },
            { text: "Walcz z nim, by chronic Arie", next: "ending_sacrifice" }
        ]
    },
    powrot_do_domu: {
        chapter: "Zakonczenie",
        speaker: "Narrator",
        text: "Uznajesz, ze to zbyt niebezpieczne. Wracacie bezpiecznie do domu, rezygnujac ze smoczego paktu.",
        image: "bg_ending_good.png",
        effects: {},
        choices: [
            { text: "Koniec opowiesci", next: "ending_mundane" }
        ]
    },

    ending_hero: {
        chapter: "Zakonczenie",
        speaker: "Narrator",
        text: "Wladca Smokow. Dzieki wiedzy opanowujesz rytual i zawierasz pelny pakt. Stajesz sie poteznym magiem, a smok Twoim towarzyszem.",
        image: "bg_ending_good.png",
        effects: {},
        endingType: "good",
        endingTitle: "Wladca Smokow",
        choices: []
    },
    ending_scholar: {
        chapter: "Zakonczenie",
        speaker: "Narrator",
        text: "Uwolnienie Bestii. Uwolniony smok odlatuje, a Ty zostajesz obronca wolnosci i badaczem magicznych stworzen.",
        image: "bg_ending_good.png",
        effects: {},
        endingType: "good",
        endingTitle: "Uwolnienie Bestii",
        choices: []
    },
    ending_together: {
        chapter: "Zakonczenie",
        speaker: "Narrator",
        text: "Wspolny Pakt. Dzielicie sie moca smoka z Aria. Razem jestescie niezwyciezeni, a Wasz sojusz staje sie legenda.",
        image: "bg_ending_good.png",
        effects: {},
        endingType: "good",
        endingTitle: "Wspolny Pakt",
        choices: []
    },
    ending_sacrifice: {
        chapter: "Zakonczenie",
        speaker: "Narrator",
        text: "Ofiara Maga. Ratisz Arie przed plomieniem smoka, ale tracisz wlasna moc. Aria opiekuje sie Toba w bezpiecznej przystani.",
        image: "bg_ending_good.png",
        effects: {},
        endingType: "neutral",
        endingTitle: "Ofiara Maga",
        choices: []
    },
    ending_mundane: {
        chapter: "Zakonczenie",
        speaker: "Narrator",
        text: "Zwykle Zycie. Wybieracie bezpieczenstwo. Wasze zycie plynie spokojnie, choc czasem tesknisz za smoczym plomieniem.",
        image: "bg_ending_good.png",
        effects: {},
        endingType: "neutral",
        endingTitle: "Zwykle Zycie",
        choices: []
    },
    ending_cursed: {
        chapter: "Zakonczenie",
        speaker: "Narrator",
        text: "Uwieziona Dusza. Smocza klatwa zamienia Cie w kamienny posag, stajac sie czescia jaskini na wieki.",
        image: "bg_ending_bad.png",
        effects: {},
        endingType: "bad",
        endingTitle: "Uwieziona Dusza",
        choices: []
    },
    ending_consumed: {
        chapter: "Zakonczenie",
        speaker: "Narrator",
        text: "Pochloniety Ogniem. Smoczy ogien okazuje sie zbyt silny. Twoje cialo obraca sie w popiol, a dusza staje sie czescia magii jaskini.",
        image: "bg_ending_bad.png",
        effects: {},
        endingType: "bad",
        endingTitle: "Pochloniety Ogniem",
        choices: []
    },
    ending_ascension: {
        chapter: "Zakonczenie",
        speaker: "Narrator",
        text: "Smocza Transcendencja. Aria, zjednoczona ze smokiem, wznosi Cie do wymiaru magii gwiazd. Tworzycie nowa rzeczywistosc.",
        image: "bg_ending_good.png",
        effects: {},
        endingType: "secret",
        endingTitle: "Smocza Transcendencja",
        choices: []
    }
};

const ITEMS = {
    klucz: { name: "Runa Ognia", emoji: "\uD83D\uDD25", desc: "Pradawna runa wydzielajaca cieplo. Pozwala aktywowac zamki ognia." },
    pioro: { name: "Berlo Swiatla", emoji: "\uD83E\uDE84", desc: "Berlo neutralizujace magiczne bariery ochronne." },
    mapa: { name: "Stary Pergamin", emoji: "\uD83D\uDCDC", desc: "Pergamin zawierajacy uklad lochow i tajne hasla." },
    ksiega: { name: "Mroczny Grimuar", emoji: "\uD83D\uDCD6", desc: "Ksiega zakazanych zaklec i rytualow uwolnienia duchow." },
    eliksir: { name: "Eliksir Many", emoji: "\uD83E\uDDEA", desc: "Flakon z eliksirem regenerujacym magiczne sily." },
    amulet: { name: "Pierscien Ochronny", emoji: "\uD83D\uDC8D", desc: "Zloty pierscien tworzacy tarcze przed zakleciami." }
};

const ACHIEVEMENTS = [
    { id: "first_choice", name: "Poczatek Przygody", desc: "Dokonaj pierwszego wyboru w grze", emoji: "\uD83C\uDFAE", check: (s) => s.visitedScenes.length > 1 },
    { id: "explorer", name: "Odkrywca", desc: "Odwiedz 15 roznych scen", emoji: "\uD83E\uDDED", check: (s) => s.visitedScenes.length >= 15 },
    { id: "master_explorer", name: "Mistrz Eksploracji", desc: "Odwiedz 30 roznych scen", emoji: "\uD83C\uDF0D", check: (s) => s.visitedScenes.length >= 30 },
    { id: "scholar", name: "Uczony", desc: "Osiagnij wiedze na poziomie 8", emoji: "\uD83D\uDCDA", check: (s) => s.stats.wiedza >= 8 },
    { id: "brave", name: "Odwazny", desc: "Osiagnij odwage na poziomie 6", emoji: "\u2694\uFE0F", check: (s) => s.stats.odwaga >= 6 },
    { id: "lover", name: "Bliskie Wiezi", desc: "Osiagnij relacje z Aria na poziomie 7", emoji: "\u2764\uFE0F", check: (s) => s.stats.relacja >= 7 },
    { id: "collector", name: "Zbieracz", desc: "Zbierz 4 rozne przedmioty w jednej grze", emoji: "\uD83C\uDF92", check: (s) => s.inventory.length >= 4 },
    { id: "ending_1", name: "Pierwsza Sciezka", desc: "Odkryj dowolne zakonczenie", emoji: "\uD83C\uDFC1", check: (s) => s.endings.length >= 1 },
    { id: "ending_3", name: "Wielokrotne Losy", desc: "Odkryj 3 rozne zakonczenia", emoji: "\uD83C\uDF1F", check: (s) => s.endings.length >= 3 },
    { id: "ending_all", name: "Mistrz Losu", desc: "Odkryj wszystkie 8 zakonczen", emoji: "\uD83D\uDC51", check: (s) => s.endings.length >= 8 },
    { id: "secret_end", name: "Transcendencja", desc: "Odkryj sekretne zakonczenie", emoji: "\u2728", check: (s) => s.endings.includes("ending_ascension") },
    { id: "speedrun", name: "Blyskawica", desc: "Dotrzyz do zakonczenia w mniej niz 8 krokow", emoji: "\u26A1", check: (s) => s.currentEnding && s.stepCount <= 8 }
];

const TREE_COLUMNS = [
    { title: "Wejscie", nodes: ["start"] },
    { title: "Spotkanie", nodes: ["aria_spotkanie", "samodzielne_poszukiwanie", "brama_obserwacja"] },
    { title: "Przeszukiwanie", nodes: ["legenda_szczegoly", "wspolna_nauka", "skrzynia_tajemna", "spacer_mury", "szafa_kartotekowa", "znalezienie_klucza", "szukanie_ksiag"] },
    { title: "Przygotowanie", nodes: ["prezentacja_piora", "analiza_mapy", "poszukiwanie_portalu"] },
    { title: "Mechanizm", nodes: ["otwarcie_kluczem", "deszyfrowanie_run", "uzycie_piora", "proba_sily", "proba_teleportacji"] },
    { title: "Lochy Twierdzy", nodes: ["korytarz_podziemny", "biblioteka_zakazana_podziemna", "laboratorium", "runy_korytarzowe", "eliksir_mocy", "diagramy_alchemiczne", "amulet_ochronny", "stroz_duchowy"] },
    { title: "Ogrod Cieni", nodes: ["wieza_schody", "obserwacje_gwiezdne", "mapy_gwiezdne", "wejscie_lasu", "altar_leany", "proroctwo", "zrodlo_mocy"] },
    { title: "Konfrontacja", nodes: ["droga_do_komnaty", "dialog_straznik", "straznik_akceptacja", "straznik_ostrzezenie", "walka_straznik", "odczyn_ksiega", "komnata_krysztalu", "rytuala_polaczenie", "sakura_przejmuje", "zniszczenie_krysztalu", "powrot_do_domu"] },
    { title: "Zakonczenia", nodes: ["ending_hero", "ending_scholar", "ending_together", "ending_sacrifice", "ending_mundane", "ending_cursed", "ending_consumed", "ending_ascension"] }
];

const SCENE_NAMES = {};
Object.keys(STORY).forEach(id => {
    let name = id.replace(/_/g, " ");
    name = name.charAt(0).toUpperCase() + name.slice(1);
    if (id.startsWith("ending_")) name = "FIN: " + STORY[id].endingTitle;
    SCENE_NAMES[id] = name;
});

const GALLERY_SCENES = [
    { id: "bg_twierdza", name: "Przekleta Twierdza", file: "bg_twierdza.png" },
    { id: "bg_loch", name: "Mroczne Lochy", file: "bg_loch.png" },
    { id: "bg_jaskinia", name: "Smocza Jaskinia", file: "bg_jaskinia.png" },
    { id: "bg_ogrod", name: "Enchanted Garden", file: "bg_ogrod.png" },
    { id: "bg_ending_good", name: "Swit Zwyciestwa", file: "bg_ending_good.png" },
    { id: "bg_ending_bad", name: "Ciemnosc Chaosu", file: "bg_ending_bad.png" }
];

const CONNECTIONS = [];
Object.keys(STORY).forEach(from => {
    STORY[from].choices.forEach(c => {
        if (c.next && STORY[c.next]) CONNECTIONS.push({ from, to: c.next });
    });
});

const SPEED_MAP = { slow: 60, normal: 30, fast: 10, instant: 0 };

function loadPersistent() {
    try {
        const raw = localStorage.getItem("vn_persistent");
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { visitedScenes: ["start"], endings: [], achievements: [], galleryUnlocked: [], saves: [null, null, null] };
}

function savePersistent(p) {
    localStorage.setItem("vn_persistent", JSON.stringify(p));
}

function loadSettings() {
    try {
        const raw = localStorage.getItem("vn_settings");
        if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { theme: "neon", fontSize: "medium", font: "inter", textSpeed: "normal", musicOn: false, musicVol: 0.5, sfxOn: true };
}

function saveSettings(s) {
    localStorage.setItem("vn_settings", JSON.stringify(s));
}

let persistent = loadPersistent();
let settings = loadSettings();

let gameState = {
    currentNode: "start",
    stats: { wiedza: 0, odwaga: 0, relacja: 0, moc: 0 },
    inventory: [],
    history: [],
    stepCount: 0,
    currentEnding: null
};

let typingTimer = null;
let typingDone = false;
let fullText = "";
let treeZoom = 1;
let typingCallback = null;
let isTransitioning = false;

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function applySettings() {
    document.body.className = "";
    if (settings.theme !== "neon") document.body.classList.add("theme-" + settings.theme);
    document.body.classList.add("font-" + settings.font);
    document.body.classList.add("font-size-" + settings.fontSize);

    const music = $("#bg-music");
    if (music) {
        music.volume = settings.musicVol;
        if (settings.musicOn && music.paused) music.play().catch(() => {});
        if (!settings.musicOn && !music.paused) music.pause();
    }
}

function showScreen(id) {
    $$(".screen").forEach(s => { s.classList.remove("active"); });
    const target = $("#" + id);
    if (target) {
        target.style.display = "flex";
        requestAnimationFrame(() => { target.classList.add("active"); });
    }
}

function spawnTitleParticles() {
    const container = $("#title-particles");
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < 150; i++) {
        const p = document.createElement("div");
        p.classList.add("particle");
        p.style.left = Math.random() * 100 + "%";
        p.style.animationDuration = (6 + Math.random() * 10) + "s";
        p.style.animationDelay = Math.random() * 8 + "s";
        p.style.width = (2 + Math.random() * 4) + "px";
        p.style.height = p.style.width;
        p.style.opacity = String(0.2 + Math.random() * 0.5);
        container.appendChild(p);
    }
}

function showToast(icon, title, desc) {
    const container = $("#toast-container");
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = `<span class="toast-icon">${icon}</span><div class="toast-body"><span class="toast-title">${title}</span><span class="toast-desc">${desc}</span></div>`;
    container.appendChild(toast);
    setTimeout(() => { if (toast.parentNode) toast.remove(); }, 3800);
}

function typeText(text, el, speed, callback) {
    if (typingTimer) clearInterval(typingTimer);
    fullText = text;
    typingDone = false;
    typingCallback = callback;
    const cursorHTML = '<span class="typing-cursor"></span>';
    el.innerHTML = cursorHTML;
    const hint = $("#dialogue-click-hint");
    if (hint) hint.classList.remove("visible");

    if (speed === 0) {
        el.innerHTML = text + cursorHTML;
        typingDone = true;
        if (hint) hint.classList.add("visible");
        if (typingCallback) { typingCallback(); typingCallback = null; }
        return;
    }

    let i = 0;
    typingTimer = setInterval(() => {
        if (i < text.length) {
            el.innerHTML = text.substring(0, i + 1) + cursorHTML;
            i++;
        } else {
            clearInterval(typingTimer);
            typingTimer = null;
            typingDone = true;
            if (hint) hint.classList.add("visible");
            if (typingCallback) { typingCallback(); typingCallback = null; }
        }
    }, speed);
}

function skipTyping() {
    if (!typingDone && fullText) {
        if (typingTimer) clearInterval(typingTimer);
        typingTimer = null;
        const el = $("#dialogue-text");
        const cursorHTML = '<span class="typing-cursor"></span>';
        if (el) el.innerHTML = fullText + cursorHTML;
        typingDone = true;
        const hint = $("#dialogue-click-hint");
        if (hint) hint.classList.add("visible");
        if (typingCallback) { typingCallback(); typingCallback = null; }
    }
}

function updateHUD() {
    const node = STORY[gameState.currentNode];
    if (node) $("#hud-chapter").textContent = node.chapter || "";
    $("#stat-wiedza").textContent = gameState.stats.wiedza;
    $("#stat-odwaga").textContent = gameState.stats.odwaga;
    $("#stat-relacja").textContent = gameState.stats.relacja;
    $("#stat-moc").textContent = gameState.stats.moc;

    const invContainer = $("#hud-inventory");
    invContainer.innerHTML = "";
    gameState.inventory.forEach(itemId => {
        const item = ITEMS[itemId];
        if (item) {
            const icon = document.createElement("div");
            icon.classList.add("inv-icon");
            icon.setAttribute("data-tooltip", item.name);
            icon.textContent = item.emoji;
            invContainer.appendChild(icon);
        }
    });
}

function checkRequirements(choice) {
    if (!choice.requires) return true;
    if (choice.requires.item && !gameState.inventory.includes(choice.requires.item)) return false;
    if (choice.requires.stat) {
        const val = gameState.stats[choice.requires.stat] || 0;
        if (val < (choice.requires.min || 0)) return false;
    }
    return true;
}

function getRequirementText(choice) {
    if (!choice.requires) return "";
    if (choice.requires.item) {
        const item = ITEMS[choice.requires.item];
        return item ? "Wymaga: " + item.name : "Wymaga przedmiotu";
    }
    if (choice.requires.stat) {
        const names = { wiedza: "Wiedzy", odwaga: "Odwagi", relacja: "Zaufania", moc: "Mocy" };
        return "Wymaga " + (names[choice.requires.stat] || choice.requires.stat) + ": " + choice.requires.min;
    }
    return "";
}

function showScene(nodeId) {
    if (isTransitioning) return;
    const node = STORY[nodeId];
    if (!node) return;
    isTransitioning = true;

    gameState.currentNode = nodeId;
    gameState.stepCount++;
    gameState.history.push(nodeId);

    if (!persistent.visitedScenes.includes(nodeId)) {
        persistent.visitedScenes.push(nodeId);
    }

    if (node.effects) {
        if (node.effects.resetInventory) {
            gameState.inventory = [];
            gameState.stats = { wiedza: 0, odwaga: 0, relacja: 0, moc: 0 };
            gameState.stepCount = 0;
            gameState.history = [nodeId];
            gameState.currentEnding = null;
        }
        ["wiedza", "odwaga", "relacja", "moc"].forEach(stat => {
            if (node.effects[stat] !== undefined) {
                gameState.stats[stat] = Math.max(0, Math.min(10, gameState.stats[stat] + node.effects[stat]));
            }
        });
    }

    const img = node.image || "bg_twierdza.png";
    if (!persistent.galleryUnlocked.includes(img)) {
        persistent.galleryUnlocked.push(img);
    }

    savePersistent(persistent);

    const bgEl = $("#scene-bg");
    bgEl.style.opacity = "0";
    setTimeout(() => {
        bgEl.src = img;
        bgEl.style.opacity = "1";
    }, 250);

    $("#speaker-name").textContent = node.speaker || "Narrator";
    updateHUD();

    const choicesPanel = $("#choices-panel");
    choicesPanel.classList.remove("visible");
    choicesPanel.innerHTML = "";

    const speed = SPEED_MAP[settings.textSpeed] || 30;
    typeText(node.text, $("#dialogue-text"), speed, () => {
        if (node.endingType) {
            showEnding(nodeId, node);
            return;
        }
        renderChoices(node, choicesPanel);
    });

    checkAchievements();
}

function renderChoices(node, panel) {
    panel.innerHTML = "";
    node.choices.forEach((choice, idx) => {
        const card = document.createElement("button");
        card.classList.add("choice-card");
        card.style.animationDelay = (idx * 0.08) + "s";

        const met = checkRequirements(choice);

        if (choice.item && !gameState.inventory.includes(choice.item)) {
            card.addEventListener("click", () => {
                gameState.inventory.push(choice.item);
                const item = ITEMS[choice.item];
                if (item) showToast(item.emoji, "Nowy Przedmiot!", item.name);
                showScene(choice.next);
            });
        } else if (met) {
            card.addEventListener("click", () => { showScene(choice.next); });
        } else {
            card.classList.add("locked");
        }

        let html = choice.text;
        if (!met) {
            html += `<span class="choice-req">${getRequirementText(choice)}</span>`;
        }
        card.innerHTML = html;
        panel.appendChild(card);
    });
    requestAnimationFrame(() => { 
        panel.classList.add("visible"); 
        setTimeout(() => { isTransitioning = false; }, 300);
    });
}

function showEnding(nodeId, node) {
    gameState.currentEnding = nodeId;

    if (!persistent.endings.includes(nodeId)) {
        persistent.endings.push(nodeId);
        savePersistent(persistent);
    }

    checkAchievements();

    setTimeout(() => {
        const typeLabels = { good: "DOBRE ZAKONCZENIE", bad: "ZLE ZAKONCZENIE", neutral: "NEUTRALNE ZAKONCZENIE", secret: "SEKRETNE ZAKONCZENIE" };
        $("#ending-badge").textContent = typeLabels[node.endingType] || "ZAKONCZENIE";
        $("#ending-title").textContent = node.endingTitle || "Koniec";
        $("#ending-description").textContent = node.text;

        const statsEl = $("#ending-stats");
        statsEl.innerHTML = "";
        const statLabels = { wiedza: "Wiedza", odwaga: "Odwaga", relacja: "Zaufanie Arii", moc: "Moc Magiczna" };
        Object.keys(statLabels).forEach(key => {
            const card = document.createElement("div");
            card.classList.add("stat-card");
            card.innerHTML = `<div class="stat-label">${statLabels[key]}</div><div class="stat-value">${gameState.stats[key]}</div>`;
            statsEl.appendChild(card);
        });

        const allEndings = Object.keys(STORY).filter(k => STORY[k].endingType);
        const progressEl = $("#ending-progress");
        progressEl.innerHTML = "";
        allEndings.forEach(eid => {
            const dot = document.createElement("div");
            dot.classList.add("ep-dot");
            if (persistent.endings.includes(eid)) dot.classList.add("unlocked");
            if (eid === nodeId) dot.classList.add("current");
            dot.title = persistent.endings.includes(eid) ? STORY[eid].endingTitle : "???";
            progressEl.appendChild(dot);
        });

        const overlay = $(".ending-overlay");
        overlay.style.backgroundImage = `url(${node.image || "bg_ending_good.png"})`;

        showScreen("ending-screen");
        isTransitioning = false;
    }, 1500);
}

function checkAchievements() {
    const state = {
        visitedScenes: persistent.visitedScenes,
        endings: persistent.endings,
        stats: gameState.stats,
        inventory: gameState.inventory,
        currentEnding: gameState.currentEnding,
        stepCount: gameState.stepCount
    };

    ACHIEVEMENTS.forEach(ach => {
        if (!persistent.achievements.includes(ach.id) && ach.check(state)) {
            persistent.achievements.push(ach.id);
            savePersistent(persistent);
            showToast(ach.emoji, "Osiagniecie!", ach.name);
        }
    });
}

function startNewGame() {
    gameState = {
        currentNode: "start",
        stats: { wiedza: 0, odwaga: 0, relacja: 0, moc: 0 },
        inventory: [],
        history: [],
        stepCount: 0,
        currentEnding: null
    };
    showScreen("game-screen");
    showScene("start");
}

function saveGame(slot) {
    persistent.saves[slot] = {
        state: JSON.parse(JSON.stringify(gameState)),
        timestamp: Date.now(),
        sceneName: SCENE_NAMES[gameState.currentNode] || gameState.currentNode,
        image: STORY[gameState.currentNode]?.image || "bg_twierdza.png"
    };
    savePersistent(persistent);
    showToast("\uD83D\uDCBE", "Zapisano!", "Slot " + (slot + 1));
}

function loadGame(slot) {
    const save = persistent.saves[slot];
    if (!save) return;
    gameState = JSON.parse(JSON.stringify(save.state));
    closeAllModals();
    showScreen("game-screen");
    showScene(gameState.currentNode);
}

function deleteSave(slot) {
    persistent.saves[slot] = null;
    savePersistent(persistent);
    renderSaveSlots();
}

function renderSaveSlots() {
    const isTitleActive = $("#title-screen").classList.contains("active");
    const allowSave = !isTitleActive;
    const modalTitle = $("#save-modal-title");
    if (modalTitle) {
        modalTitle.textContent = allowSave ? "Zapisz Gre" : "Wczytaj Gre";
    }
    const container = $("#save-slots");
    container.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const save = persistent.saves[i];
        const slot = document.createElement("div");
        slot.classList.add("save-slot");

        if (save) {
            const date = new Date(save.timestamp);
            const dateStr = date.toLocaleDateString("pl-PL") + " " + date.toLocaleTimeString("pl-PL", { hour: "2-digit", minute: "2-digit" });
            slot.innerHTML = `
                <div class="slot-thumb"><img src="${save.image}" alt=""></div>
                <div class="slot-info"><div class="slot-title">Slot ${i + 1}: ${save.sceneName}</div><div class="slot-meta">${dateStr}</div></div>
                <div class="slot-actions"><button class="slot-btn load-btn" data-slot="${i}">Wczytaj</button><button class="slot-btn delete" data-slot="${i}">Usun</button></div>`;
        } else {
            if (allowSave) {
                slot.innerHTML = `
                    <div class="slot-thumb"></div>
                    <div class="slot-info"><div class="slot-empty">Slot ${i + 1} - Pusty</div></div>
                    <div class="slot-actions"><button class="slot-btn save-btn" data-slot="${i}">Zapisz</button></div>`;
            } else {
                slot.innerHTML = `
                    <div class="slot-thumb"></div>
                    <div class="slot-info"><div class="slot-empty">Slot ${i + 1} - Pusty</div></div>
                    <div class="slot-actions"></div>`;
            }
        }
        container.appendChild(slot);
    }

    container.querySelectorAll(".save-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            saveGame(parseInt(e.target.dataset.slot));
            renderSaveSlots();
        });
    });
    container.querySelectorAll(".load-btn").forEach(btn => {
        btn.addEventListener("click", (e) => { loadGame(parseInt(e.target.dataset.slot)); });
    });
    container.querySelectorAll(".delete").forEach(btn => {
        btn.addEventListener("click", (e) => { deleteSave(parseInt(e.target.dataset.slot)); });
    });
}

function renderTree() {
    const nodesContainer = $("#tree-nodes");
    nodesContainer.innerHTML = "";

    TREE_COLUMNS.forEach(col => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("tree-col");

        const title = document.createElement("div");
        title.classList.add("tree-col-title");
        title.textContent = col.title;
        colDiv.appendChild(title);

        col.nodes.forEach(nodeId => {
            const node = document.createElement("div");
            node.classList.add("tree-node");
            node.dataset.nodeId = nodeId;

            const isGlobalVisited = persistent.visitedScenes.includes(nodeId);
            const isCurrentHistory = gameState.history.includes(nodeId) || nodeId === gameState.currentNode;

            if (isGlobalVisited) {
                if (isCurrentHistory) {
                    node.classList.add("visited");
                } else {
                    node.classList.add("visited-global");
                }
                const label = document.createElement("span");
                label.classList.add("node-label");
                label.textContent = SCENE_NAMES[nodeId] || nodeId;
                node.appendChild(label);

                if (nodeId.startsWith("ending_")) {
                    node.classList.add("ending-node");
                    const type = document.createElement("span");
                    type.classList.add("node-type");
                    type.textContent = STORY[nodeId]?.endingType || "";
                    node.appendChild(type);
                }
            } else {
                node.textContent = "???";
            }

            if (nodeId === gameState.currentNode) node.classList.add("current-node");
            colDiv.appendChild(node);
        });

        nodesContainer.appendChild(colDiv);
    });

    const totalNodes = TREE_COLUMNS.reduce((s, c) => s + c.nodes.length, 0);
    const visited = TREE_COLUMNS.reduce((s, c) => s + c.nodes.filter(n => persistent.visitedScenes.includes(n)).length, 0);
    $("#tree-counter").textContent = visited + " / " + totalNodes + " scen";

    setTimeout(drawTreeConnections, 80);
}

function getOffset(el, parent) {
    let x = 0, y = 0;
    while (el && el !== parent) {
        x += el.offsetLeft;
        y += el.offsetTop;
        el = el.offsetParent;
    }
    return { x, y };
}

function drawTreeConnections() {
    const svg = $("#tree-svg");
    const canvas = $("#tree-canvas");
    if (!svg || !canvas) return;

    svg.innerHTML = "";
    svg.setAttribute("width", canvas.scrollWidth);
    svg.setAttribute("height", canvas.scrollHeight);

    CONNECTIONS.forEach(conn => {
        const srcEl = canvas.querySelector(`[data-node-id="${conn.from}"]`);
        const tgtEl = canvas.querySelector(`[data-node-id="${conn.to}"]`);
        if (!srcEl || !tgtEl) return;

        const srcPos = getOffset(srcEl, canvas);
        const tgtPos = getOffset(tgtEl, canvas);

        const x1 = srcPos.x + srcEl.offsetWidth / 2;
        const y1 = srcPos.y + srcEl.offsetHeight;
        const x2 = tgtPos.x + tgtEl.offsetWidth / 2;
        const y2 = tgtPos.y;

        const cpy = Math.max(Math.abs(y2 - y1) * 0.4, 40);
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", `M ${x1} ${y1} C ${x1} ${y1 + cpy}, ${x2} ${y2 - cpy}, ${x2} ${y2}`);

        const srcG = persistent.visitedScenes.includes(conn.from);
        const tgtG = persistent.visitedScenes.includes(conn.to);
        const srcH = gameState.history.includes(conn.from) || conn.from === gameState.currentNode;
        const tgtH = gameState.history.includes(conn.to) || conn.to === gameState.currentNode;

        if (srcH && tgtH) {
            path.setAttribute("class", "tree-path-visited");
            svg.appendChild(path);
        } else if (srcG && tgtG) {
            path.setAttribute("class", "tree-path-global");
            svg.appendChild(path);
        } else if (srcG) {
            path.setAttribute("class", "tree-path-available");
            svg.appendChild(path);
        }
    });
}

function renderInventoryModal() {
    const grid = $("#inventory-grid");
    const detail = $("#inventory-detail");
    grid.innerHTML = "";
    detail.innerHTML = "";

    const allItems = Object.keys(ITEMS);
    allItems.forEach(itemId => {
        const item = ITEMS[itemId];
        const slot = document.createElement("div");
        slot.classList.add("inv-slot");

        if (gameState.inventory.includes(itemId)) {
            slot.classList.add("has-item");
            slot.innerHTML = `<span class="inv-emoji">${item.emoji}</span><span class="inv-name">${item.name}</span>`;
            slot.addEventListener("click", () => {
                detail.innerHTML = `<strong>${item.emoji} ${item.name}</strong><br><br>${item.desc}`;
            });
        } else {
            slot.innerHTML = `<span class="inv-emoji" style="filter:grayscale(1) opacity(0.2)">?</span><span class="inv-name" style="color:rgba(255,255,255,0.15)">???</span>`;
        }
        grid.appendChild(slot);
    });

    if (gameState.inventory.length === 0) {
        detail.innerHTML = '<p class="inventory-empty">Twoj ekwipunek jest pusty. Przeszukuj lokacje, by znalezc przedmioty.</p>';
    } else {
        detail.innerHTML = '<p class="inventory-empty">Kliknij na przedmiot, aby zobaczyc opis.</p>';
    }
}

function renderGallery() {
    const grid = $("#gallery-grid");
    grid.innerHTML = "";

    GALLERY_SCENES.forEach(scene => {
        const item = document.createElement("div");
        item.classList.add("gallery-item");

        if (persistent.galleryUnlocked.includes(scene.file)) {
            item.innerHTML = `<img src="${scene.file}" alt="${scene.name}"><div class="gallery-label">${scene.name}</div>`;
        } else {
            item.classList.add("locked");
            item.innerHTML = `<img src="${scene.file}" alt="Zablokowana scena">`;
        }
        grid.appendChild(item);
    });
}

function renderAchievements() {
    const list = $("#achievements-list");
    list.innerHTML = "";

    ACHIEVEMENTS.forEach(ach => {
        const item = document.createElement("div");
        item.classList.add("ach-item");
        if (persistent.achievements.includes(ach.id)) item.classList.add("unlocked");

        item.innerHTML = `
            <div class="ach-icon">${ach.emoji}</div>
            <div class="ach-info">
                <div class="ach-name">${persistent.achievements.includes(ach.id) ? ach.name : "???"}</div>
                <div class="ach-desc">${persistent.achievements.includes(ach.id) ? ach.desc : "Nieodblokowane"}</div>
            </div>`;
        list.appendChild(item);
    });

    $("#ach-counter").textContent = persistent.achievements.length + " / " + ACHIEVEMENTS.length;
}

function openModal(id) {
    const modal = $("#" + id);
    if (modal) {
        modal.style.display = "flex";
        requestAnimationFrame(() => { modal.classList.add("open"); });
    }
}

function closeModal(id) {
    const modal = $("#" + id);
    if (modal) {
        modal.classList.remove("open");
        setTimeout(() => { modal.style.display = "none"; }, 300);
    }
}

function closeAllModals() {
    $$(".modal-overlay").forEach(m => {
        m.classList.remove("open");
        m.style.display = "none";
    });
}

function initRuneGroups() {
    $$(".rune-group").forEach(group => {
        group.querySelectorAll(".rune-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                group.querySelectorAll(".rune-btn").forEach(p => p.classList.remove("active"));
                btn.classList.add("active");
            });
        });
    });
}

function readSettingsFromUI() {
    const getActive = (id) => {
        const el = $(`#${id} .rune-btn.active`);
        return el ? el.dataset.value : null;
    };

    settings.theme = getActive("opt-theme") || "neon";
    settings.fontSize = getActive("opt-font-size") || "medium";
    settings.font = getActive("opt-font") || "inter";
    settings.textSpeed = getActive("opt-text-speed") || "normal";
    settings.musicOn = $("#opt-music").checked;
    settings.musicVol = parseFloat($("#opt-music-vol").value);
    settings.sfxOn = $("#opt-sfx").checked;

    saveSettings(settings);
    applySettings();
}

function applySettingsToUI() {
    const setActive = (groupId, val) => {
        const group = $("#" + groupId);
        if (!group) return;
        group.querySelectorAll(".rune-btn").forEach(p => {
            p.classList.toggle("active", p.dataset.value === val);
        });
    };

    setActive("opt-theme", settings.theme);
    setActive("opt-font-size", settings.fontSize);
    setActive("opt-font", settings.font);
    setActive("opt-text-speed", settings.textSpeed);
    $("#opt-music").checked = settings.musicOn;
    $("#opt-music-vol").value = settings.musicVol;
    $("#opt-music-vol-val").textContent = Math.round(settings.musicVol * 100) + "%";
    $("#opt-sfx").checked = settings.sfxOn;
}

function initEvents() {
    $("#btn-new-game").addEventListener("click", startNewGame);

    const titleLoadBtn = $("#btn-title-load");
    if (titleLoadBtn) {
        titleLoadBtn.addEventListener("click", () => {
            renderSaveSlots();
            openModal("modal-save");
        });
    }

    $("#btn-continue").addEventListener("click", () => {
        const lastSave = persistent.saves.find(s => s !== null);
        if (lastSave) {
            const idx = persistent.saves.indexOf(lastSave);
            loadGame(idx);
        } else if (persistent.visitedScenes.length > 1) {
            startNewGame();
        } else {
            showToast("\u26A0\uFE0F", "Brak Zapisow", "Rozpocznij nowa gre.");
        }
    });

    ["btn-title-settings", "btn-game-settings"].forEach(id => {
        const el = $("#" + id);
        if (el) el.addEventListener("click", () => {
            applySettingsToUI();
            openModal("modal-settings");
        });
    });

    ["btn-title-gallery"].forEach(id => {
        const el = $("#" + id);
        if (el) el.addEventListener("click", () => { renderGallery(); openModal("modal-gallery"); });
    });

    ["btn-title-achievements"].forEach(id => {
        const el = $("#" + id);
        if (el) el.addEventListener("click", () => { renderAchievements(); openModal("modal-achievements"); });
    });

    const treeBtn = $("#btn-game-tree");
    if (treeBtn) treeBtn.addEventListener("click", () => { renderTree(); openModal("modal-tree"); });

    const invBtn = $("#btn-game-inventory");
    if (invBtn) invBtn.addEventListener("click", () => { renderInventoryModal(); openModal("modal-inventory"); });

    const saveBtn = $("#btn-save-quick");
    if (saveBtn) saveBtn.addEventListener("click", () => { renderSaveSlots(); openModal("modal-save"); });

    $$(".modal-close").forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.dataset.close;
            if (modalId) closeModal(modalId);
        });
    });

    $$(".modal-overlay").forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("open");
                setTimeout(() => { modal.style.display = "none"; }, 300);
            }
        });
    });

    $$(".rune-group .rune-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setTimeout(readSettingsFromUI, 50);
        });
    });

    $("#opt-music").addEventListener("change", () => setTimeout(readSettingsFromUI, 50));
    $("#opt-sfx").addEventListener("change", () => setTimeout(readSettingsFromUI, 50));

    const volSlider = $("#opt-music-vol");
    volSlider.addEventListener("input", () => {
        const val = parseFloat(volSlider.value);
        $("#opt-music-vol-val").textContent = Math.round(val * 100) + "%";
        settings.musicVol = val;
        const music = $("#bg-music");
        if (music) music.volume = val;
        saveSettings(settings);
    });

    const fullscreenBtn = $("#opt-fullscreen");
    if (fullscreenBtn) fullscreenBtn.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
            fullscreenBtn.textContent = "Wylacz pelny ekran";
        } else {
            document.exitFullscreen();
            fullscreenBtn.textContent = "Wlacz pelny ekran";
        }
    });

    const resetBtn = $("#opt-reset");
    if (resetBtn) resetBtn.addEventListener("click", () => {
        if (confirm("Czy na pewno chcesz zresetowac CALY postep? Wszystkie zapisy, osiagniecia i odkryte sceny zostana usuniete.")) {
            localStorage.removeItem("vn_persistent");
            localStorage.removeItem("vn_settings");
            window.location.reload();
        }
    });

    const dialoguePanel = $("#dialogue-panel");
    if (dialoguePanel) dialoguePanel.addEventListener("click", skipTyping);

    $("#btn-play-again").addEventListener("click", startNewGame);
    $("#btn-back-to-menu").addEventListener("click", () => { showScreen("title-screen"); });

    const zoomIn = $("#tree-zoom-in");
    const zoomOut = $("#tree-zoom-out");
    const zoomReset = $("#tree-zoom-reset");
    const canvas = $("#tree-canvas");

    if (zoomIn) zoomIn.addEventListener("click", () => { treeZoom = Math.min(2, treeZoom + 0.15); canvas.style.transform = `scale(${treeZoom})`; });
    if (zoomOut) zoomOut.addEventListener("click", () => { treeZoom = Math.max(0.4, treeZoom - 0.15); canvas.style.transform = `scale(${treeZoom})`; });
    if (zoomReset) zoomReset.addEventListener("click", () => { treeZoom = 1; canvas.style.transform = `scale(1)`; });

    window.addEventListener("resize", () => {
        if ($("#modal-tree").classList.contains("open")) drawTreeConnections();
    });

    document.body.addEventListener("click", () => {
        if (settings.musicOn) {
            const m = $("#bg-music");
            if (m && m.paused) m.play().catch(() => {});
        }
    }, { once: true });
}

function init() {
    initRuneGroups();
    applySettings();
    spawnTitleParticles();
    initEvents();
    showScreen("title-screen");
}

document.addEventListener("DOMContentLoaded", init);

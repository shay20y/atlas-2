export default class AppClass {
    constructor(_parent, _item, _border) {
        this.parent = _parent;
        this.border = _border;
        this.name = (_item.name.common).toUpperCase();
        this.pop = (_item.population).toLocaleString();
        this.region = _item.continents;
        this.languages = _item.languages;
        this.coin = _item.currencies;
        this.capital = _item.capital;
        this.flag = _item.flags.png;
        this.borders = _item.borders;
        this.googleMap = _item.maps.googleMaps;
        this.map = _item.latlng;


    }


    render() {

        let div = document.createElement("div");
        // div.className = "p-3";
        div.style.minHeight = "100vh"
        div.style.maxWidth = "100vw"
        document.querySelector(this.parent).append(div);

        let bordersList = "";
        for (let i = 0; i < this.border.length; i++) {
            bordersList += `
            <tr>
            <th>
            <a href="/index.html?search=${this.border[i]}">${this.border[i]}</a>
            </th>
            </tr>
            `;

        }

        let coinList = "";
        for (let key in this.coin) {
            coinList += `${this.coin[key].name} , (${this.coin[key].symbol})`;
        }

        // console.log(coinList);

        let languages = "";
        for (const key in this.languages) {
            languages += ` ${key.toUpperCase()} : ${this.languages[key]} | `;
        }

        // console.log(languages);

        div.innerHTML = `
        <div class="main">

    <h1 class="text-center border-bottom border-3 border-light ">${this.name}</h1>

    <div class="row rows">

        <div class="img _item">
            <div><img src="${this.flag}" width="100%" alt=""></div>
        </div>

<div class="_item bio">
<table class=" table table-striped">
            <tbody class="bioBody">
                <tr>
                    <td>Name: </td>
                    <td>${this.name}</td>
                </tr>
                <tr>
                    <td>Population: </td>
                    <td>${this.pop}</td>
                </tr>
                <tr>
                    <td>Region: </td>
                    <td>${this.region}</td>
                </tr>
                <tr>
                    <td>Languages: </td>
                    <td>${languages}</td>
                </tr>
                <tr>
                    <td>Coin: </td>
                    <td>${coinList}</td>
                </tr>
                <tr>
                    <td>Capital:</td>
                    <td> ${ this.capital ? this.capital : 'No capital city'}</td>
                </tr>
                <tr>
                    <td>Links: </td>
                    <td><a target="_blank" href="${this.googleMap}">link to google maps</a></td>
                </tr>
            </tbody>
        </table>
</div>
        
<div class="_item borders">
        <table class=" table col table-striped">
            <thead>
                <tr>
                    <th>bordering countries</th>
                </tr>
            </thead>
            <tbody>
                ${bordersList}
            </tbody>
        </table>
</div>


    </div>

</div>

<!-- end row-->

<div class="row row2 d-flex col-12">


    <div class=" googleMaps">
        <iframe src="https://maps.google.com/maps?q=${this.map}&z=5&ie=UTF8&iwloc=&output=embed" width="100%"
            height="100%" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>

</div>
      `
      
    }


}

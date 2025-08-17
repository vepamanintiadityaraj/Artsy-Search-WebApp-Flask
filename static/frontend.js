
    const text = document.getElementById('name');
    const clearb = document.getElementById("clear");
    const sub = document.getElementById("artistsearch");
    const giffy= document.getElementById("loading");
    const temp=document.getElementById('results');
    const atemp=document.getElementById('adets');
    const ahead=document.getElementById('artist_header');
    const abio=document.getElementById('artist_bio');
    const agiffy=document.getElementById('aloading');
    const noRes= document.getElementById('nores');

    let scard = null;

    sub.addEventListener('submit',async(event)=>{
        event.preventDefault();
        const artist=text.value.trim();

        agiffy.style.display = "block";  
        atemp.style.display = "none";    
        ahead.textContent = "";          
        abio.textContent = "";           
        
        
        giffy.style.display="block";
        
        fetch(`/search/${artist}`)
            .then(response=> response.json())
            .then(data=>{
                giffy.style.display="none";
                temp.innerHTML="";
                const results= data._embedded.results || [];
                if (results.length === 0) {
                    temp.innerHTML=" ";
                    noRes.style.display="block";
                    return;
                }
                noRes.style.display="none";

                results.forEach(artist=>{
                    
                    const name=artist.title;
                    let image_url = artist._links.thumbnail.href;
                    if(image_url.includes("/assets/shared/missing_image.png")){
                        image_url= "static/images/artsy_logo.svg";
                    }

                    const id = artist._links.self?.href.split("/").pop();

                    const artistDiv = document.createElement("div");
                    artistDiv.classList.add("artist");
                    artistDiv.setAttribute("data-id",id);

                    const img= document.createElement("img");
                    img.src = image_url;
                    img.className = "artist-img"
                    const namePara = document.createElement("p");
                    namePara.textContent=name;

                    artistDiv.appendChild(img);
                    artistDiv.appendChild(namePara);
                    temp.appendChild(artistDiv);

                });

                document.querySelectorAll(".artist").forEach(card => {
                    card.addEventListener("click", (event) => {
                        const artistID = card.getAttribute("data-id");
                        if (scard) {
                            scard.classList.remove("selected");
                        }
                        scard = card;
                        scard.classList.add("selected");

                        atemp.style.display="block";
                        agiffy.style.display = "block";
                        ahead.textContent=" ";
                        abio.textContent="";
                        document.getElementById('artist_nationality').textContent="";
                        fetch(`/end/${artistID}`)
                            .then(response => response.json())
                            .then(data=>{

                                agiffy.style.display = "none";
                                ahead.innerHTML = `${data.name} (${data.birthday} - ${data.deathday})`;
                                document.getElementById('artist_nationality').textContent=data.nationality;
                                
                                abio.textContent=data.biography;
                            })
                            .catch(err1 =>{
                                    console.error("Error fetching details:",err1);
                            });      

                    }
                )
                })


            })
            .catch(err=>{
                console.error("Error fetching data:", err);
            }
            );



    }
    
    
    );

    



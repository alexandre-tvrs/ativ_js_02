const obj_sel_rede_social = document.querySelector('#sel_rede_social')
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

obj_sel_rede_social.addEventListener('change', FunMudaFigura)

function FunMudaFigura()
{

    obj_img_rede_social.setAttribute('src', 'img/' + obj_sel_rede_social.value + '.png')
    obj_img_rede_social.setAttribute('alt', 'Logo ' + obj_sel_rede_social.value)
    obj_img_rede_social.setAttribute('title', 'Logo ' + obj_sel_rede_social.value)
    obj_p_rede_social.innerText = 'Logo ' + obj_sel_rede_social.value

}

const array_img_figuras = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector('#div_adiciona_figura')

const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')

for (obj_img of array_img_figuras)
{

    obj_img.addEventListener('click', function() { FunAdicionaFigura(this.src, this.alt) })

}

function FunAdicionaFigura(par_src, par_alt)
{

    obj_img_nova.setAttribute('src', par_src)
    obj_img_nova.setAttribute('alt', par_alt)
    obj_img_nova.setAttribute('title', par_alt)
    obj_div_adiciona_figura.appendChild(obj_img_nova)

    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('disabled', true)
    obj_input_novo.setAttribute('value', par_alt)
    obj_input_novo.setAttribute('class', 'novo_input')
    obj_div_adiciona_figura.appendChild(obj_input_novo)

}

const array_tab_principal = document.querySelectorAll('#tab_principal td')
const obj_tab_vazia = document.querySelector('#tab_vazio')
const obj_caption_vazia = document.querySelector('#tab_vazio caption')
const obj_prog_tab_vazia = document.querySelector('#prog_tab_vazia')

let contador_linhas_tabela_nova = 0

for (obj_td of array_tab_principal)
{

    obj_td.addEventListener('click', function() { FunPreencheTabela(this.innerText)} )

}

function FunPreencheTabela(par_text)
{

    if (contador_linhas_tabela_nova < 5)
    {

        const obj_tr_novo = document.createElement('tr')
        const obj_td_novo = document.createElement('td')
        obj_td_novo.innerText = par_text
        obj_tr_novo.appendChild(obj_td_novo)
        obj_tab_vazia.appendChild(obj_tr_novo)
        contador_linhas_tabela_nova++
        obj_caption_vazia.innerText = 'Tabela com ' + contador_linhas_tabela_nova + ' linha(s)'
        obj_prog_tab_vazia.value = contador_linhas_tabela_nova

    }
    else
    {

        alert('Tabela cheia!')

    }

}

const array_linguagem_web = document.querySelectorAll('[name="linguagem_web"]')
const obj_troca_imagem = document.querySelector('#troca_imagem')
const obj_img_troca_imagem = document.querySelector('#img_troca_imagem')

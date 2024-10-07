import {Feather} from '@expo/vector-icons'
import {Caixas_de_Pesquisa, Item_Lista, Tarefa_Feita, Tarefa_Delete, Botao_de_Listas, Botao_de_AddTarefa, Input_PesquisarItem, TextoInput_PesquisarItem, Input_PesquisarLista, TextoInput_PesquisarLista, Botão_AdicionarTarefaData, Pagina_AtividadesCalendario, Pagina_TarefasData, Botao_Entrar, Texto_Principal, Texto_Secundario, Texto_CaixaDeEntrada, Texto_Componentes} from './styles'

export function Tarefa () {
    return(
        <Item_Lista>
            <Tarefa_Feita>
                <Feather name="square" size={24} color="purple" />
            </Tarefa_Feita>
            <Texto_Componentes>...</Texto_Componentes>
            <Tarefa_Delete>
                <Feather name="trash-2" size={24} color="red" />
            </Tarefa_Delete>
        </Item_Lista>
    );
}

export function Atividades_Calendario () {
    return(
        <Pagina_AtividadesCalendario>
            <Texto_Componentes>...</Texto_Componentes>
        </Pagina_AtividadesCalendario>
    );
}

export function Compras () {
    return(
        <Botao_de_Listas>
            <Texto_Componentes> Nome Lista </Texto_Componentes>
        </Botao_de_Listas>
    );
} 

export function Livros () {
    return(
        <Botao_de_Listas>
            <Texto_Componentes> Nome Lista </Texto_Componentes>
        </Botao_de_Listas>
    );
} 

export function Filmes () {
    return(
        <Botao_de_Listas>
            <Texto_Componentes> Nome Lista </Texto_Componentes>
        </Botao_de_Listas>
    );
} 

export function Criacao_Lista () {
    return(
        <Botao_de_Listas>
            <Texto_Componentes> Nome Lista </Texto_Componentes>
        </Botao_de_Listas>
    );
} 

export function Adicionar_Lista () {
    return(
        <Botao_de_Listas>
            <Texto_Componentes> Nome Lista </Texto_Componentes>
        </Botao_de_Listas>
    );
} 

export function Pesquisar_Item () {
    return(
        <Input_PesquisarItem>
            <TextoInput_PesquisarItem
                placeholder='Pesquisar Item'
                placeholderTextColor='black'
                keyboardType='default'
            />
        </Input_PesquisarItem>
    );
}

export function Pesquisar_Lista () {
    return(
        <Input_PesquisarLista>
            <TextoInput_PesquisarLista
                placeholder='Pesquisar Item'
                placeholderTextColor='black'
                keyboardType='default'
            />
        </Input_PesquisarLista>
    );
}

export function Adicionar_TarefaAData () {
    return(
        <Botão_AdicionarTarefaData>
            <Texto_Componentes> ADICIONAR TAREFA </Texto_Componentes>
        </Botão_AdicionarTarefaData>
    );
} 

export function Tarefas_da_Data () {
    return(
        <Pagina_TarefasData>
            <Texto_Componentes> TAREFAS DA DATA </Texto_Componentes>
        </Pagina_TarefasData>
    );
}

export function Entrar () {
   return(
       <Botao_Entrar>
           <Texto_Principal> ENTRAR </Texto_Principal>
       </Botao_Entrar>
       )
}
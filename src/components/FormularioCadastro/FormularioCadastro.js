import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobreNome, setSobreNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ nome, sobreNome, cpf, novidades, promocoes });
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}

                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField

                value={sobreNome}
                onChange={(event) => {
                    setSobreNome(event.target.value);
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={(event) => {
                    const ehValido = validarCPF(cpf)
                    setErros({ cpf: ehValido })
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        checked={promocoes}
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                        name="promocoes"
                        color="primary" />} />

            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        checked={novidades}
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                        name="novidades"
                        color="primary" />} />


            <Button variant="contained" color="primary" type="suBmit">Cadastrar</Button>
        </form>
    )
}
export default FormularioCadastro;
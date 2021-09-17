import DefaultBtn from "../../../components/buttons/default-btn";

export default function LandingPage(props: any){
  return (
    <div className="container">
      <h1>Bem Vindo ao UOOOOOOOOOOOOOOOR</h1>
      <DefaultBtn 
        label="Entrar"
        onClick={() => props.history.push({pathname: '/sign-in'})}
      />
    </div>
  );
}
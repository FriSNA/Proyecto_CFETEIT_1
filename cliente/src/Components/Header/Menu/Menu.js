import {Container, Menu , Grid, Icon, Label, GridColumn} from "semantic-ui-react";
import Link from "next/link";

export default function MenuWeb() {
  return (
    <div className="menu">
       <Container>
        <Grid>
            <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms/>
            </Grid.Column>
            <Grid.Column className="menu__right" width={10}  >
                <MenuOptions/>
            </Grid.Column> 
            {/* <Icon name="user outline" /> Mi cuenta */}
          </Grid>
        </Container>
    </div>
  ); 
}

function MenuPlatforms (){
    return(
        <Menu>
            <Link href="/play-station">
            <Menu.Item >PlayStation</Menu.Item>
            </Link>
            <Link href="/xbox">
            <Menu.Item>Xbox</Menu.Item>
            </Link>
            <Link href="/switch">
            <Menu.Item >Twitch</Menu.Item>
            </Link>
            </Menu>
    );
}

function MenuOptions(){
return(
    <Menu>    
      <Menu.Item >
        <Icon name="user outline"/> 
        Mi cuenta</Menu.Item>
    </Menu>
)
}

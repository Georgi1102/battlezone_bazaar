package battlezone_bazaar.BattleZone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"battlezone_bazaar.BattleZone", "battlezone_bazaar.BattleZone.mappers"})
public class BattleZoneApplication {
	public static void main(String[] args) {
		SpringApplication.run(BattleZoneApplication.class, args);
	}

}

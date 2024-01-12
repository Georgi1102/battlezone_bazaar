package battlezone_bazaar.BattleZone;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class BattleZoneApplicationTests {

	@Autowired
	private BattleZoneApplication testComponent;

	@Test
	void contextLoads() {
		assertThat(testComponent).isNotNull();
	}

}

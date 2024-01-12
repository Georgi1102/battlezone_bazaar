package battlezone_bazaar.BattleZone.contollers;

import battlezone_bazaar.BattleZone.controllers.BestSellerController;
import battlezone_bazaar.BattleZone.models.BestSeller;
import battlezone_bazaar.BattleZone.services.BestSellerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class BestSellerControllerTest {

    @Mock
    private BestSellerService bestSellerService;

    @InjectMocks
    private BestSellerController bestSellerController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllBestSellers() {
        // Mocking the service response
        List<BestSeller> expectedBestSellers = Collections.singletonList(new BestSeller());
        when(bestSellerService.getAllBestSellers()).thenReturn(expectedBestSellers);

        // Performing the test
        List<BestSeller> result = bestSellerController.getAllBestSellers(bestSellerService);

        // Verifying the interactions and assertions
        verify(bestSellerService, times(1)).getAllBestSellers();
        assertEquals(expectedBestSellers, result);
    }

    @Test
    void createBestSeller() {
        when(bestSellerService.addBestSeller(anyString(), anyString())).thenReturn(true);

        ResponseEntity<?> response = bestSellerController.createBestSeller("test", "test");

        verify(bestSellerService, times(1)).addBestSeller("test", "test");
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void removeBestSeller() {
        when(bestSellerService.removeBestSeller(anyInt(), anyInt())).thenReturn(true);

        ResponseEntity<?> response = bestSellerController.removeBestSeller(1, 2022);

        verify(bestSellerService, times(1)).removeBestSeller(1, 2022);
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }
}
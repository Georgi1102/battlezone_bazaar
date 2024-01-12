package battlezone_bazaar.BattleZone.contollers;

import battlezone_bazaar.BattleZone.controllers.ProductController;
import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.services.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;
public class ProductControllerTest {

    @Mock
    private ProductService productService;

    @InjectMocks
    private ProductController productController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetProducts() {
        List<Product> mockProducts = new ArrayList<>();
        when(productService.getAllProducts()).thenReturn(mockProducts);

        List<Product> result = productController.getProducts();

        assertEquals(mockProducts, result);
        verify(productService, times(1)).getAllProducts();
    }

    @Test
    public void testSaveProduct() {
        ProductDto productDto = new ProductDto("test", "test", "test", 96, 27, "test");
        Product mockProduct = new Product();
        when(productService.saveProduct(any())).thenReturn(mockProduct);

        ResponseEntity<?> response = productController.saveProduct(productDto);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(mockProduct, response.getBody());
        verify(productService, times(1)).saveProduct(eq(productDto));
    }

    @Test
    public void testRemoveProduct() {
        String testName = "TestProduct";
        String testManufacturer = "TestManufacturer";
        when(productService.deleteProduct(eq(testName), eq(testManufacturer))).thenReturn(true);

        ResponseEntity<?> response = productController.removeProduct(testName, testManufacturer);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        verify(productService, times(1)).deleteProduct(eq(testName), eq(testManufacturer));
    }

    @Test
    public void testRemoveProductNotFound() {
        String testName = "NonExistentProduct";
        String testManufacturer = "NonExistentManufacturer";
        when(productService.deleteProduct(eq(testName), eq(testManufacturer))).thenReturn(false);

        ResponseEntity<?> response = productController.removeProduct(testName, testManufacturer);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("Item not found!", response.getBody());
        verify(productService, times(1)).deleteProduct(eq(testName), eq(testManufacturer));
    }
}
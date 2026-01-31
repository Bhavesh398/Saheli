package com.project.sakhiji;

import android.Manifest;
import android.content.pm.PackageManager;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.KeyEvent;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private long volumePressStart = 0;
    private boolean volumeTriggered = false;
    private static final int PERMISSION_REQUEST_CODE = 1001;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Request permissions on startup
        requestAppPermissions();
    }

    private void requestAppPermissions() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            String[] permissions = {
                    Manifest.permission.CAMERA,
                    Manifest.permission.RECORD_AUDIO
            };

            boolean needsRequest = false;
            for (String permission : permissions) {
                if (ContextCompat.checkSelfPermission(this, permission) != PackageManager.PERMISSION_GRANTED) {
                    needsRequest = true;
                    break;
                }
            }

            if (needsRequest) {
                ActivityCompat.requestPermissions(this, permissions, PERMISSION_REQUEST_CODE);
            }
        }
    }

    @Override
    public boolean dispatchKeyEvent(KeyEvent event) {
        int action = event.getAction();
        int keyCode = event.getKeyCode();

        if (keyCode == KeyEvent.KEYCODE_VOLUME_DOWN || keyCode == KeyEvent.KEYCODE_VOLUME_UP) {
            if (action == KeyEvent.ACTION_DOWN) {
                if (volumePressStart == 0) {
                    volumePressStart = System.currentTimeMillis();
                    volumeTriggered = false;
                } else {
                    long duration = System.currentTimeMillis() - volumePressStart;
                    if (duration > 5000 && !volumeTriggered) {
                        volumeTriggered = true;
                        notifyBridge();
                    }
                }
            } else if (action == KeyEvent.ACTION_UP) {
                volumePressStart = 0;
                volumeTriggered = false;
            }
        }
        return super.dispatchKeyEvent(event);
    }

    private void notifyBridge() {
        if (getBridge() != null) {
            getBridge().triggerWindowJSEvent("volume-panic-trigger");
        }
    }
}

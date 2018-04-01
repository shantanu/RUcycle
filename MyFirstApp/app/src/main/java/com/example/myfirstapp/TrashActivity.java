package com.example.myfirstapp;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

public class TrashActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_trash);
        Log.v("TAG", "In Trash");
        // Get the Intent that started this activity and extract the string
        Intent intent = getIntent();
        String message = intent.getStringExtra(MainActivity.EXTRA_MESSAGE);

        Log.v("TAG", message);

        // Capture the layout's TextView and set the string as its text
        TextView textView = findViewById(R.id.type_trash);
        textView.setText("Categorized as: " + message);



        //Button btn = findViewById(R.id.btn_backToCameraRecycle);
    }

    public void backToCamera (View view) {
        Intent intent = new Intent(this, MainActivity.class);
        startActivity(intent);
    }
}
